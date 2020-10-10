// import node_modules
import { Router } from "express"

// import controllers
import { homeController } from "./home"

// import others
import { PageController } from "../../shared/types/common"

// main
const pagesControllers: PageController[] = [homeController]
const pageRouter = Router()

pagesControllers.forEach(([endPoint, requestHandler]) => {
  pageRouter.get(endPoint, requestHandler)
})

type GetPageRouter = () => Router
export const getPageRouter: GetPageRouter = () => pageRouter
