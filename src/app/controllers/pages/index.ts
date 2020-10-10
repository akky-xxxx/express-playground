// import node_modules
import { Router } from "express"

// import controllers
import { homeController } from "./home"
import { childrenController } from "./children"

// import others
import { PageController } from "../../shared/types/common"

// main
const pagesControllers: PageController[] = [homeController, childrenController]
const pageRouter = Router()

pagesControllers.forEach(([endPoint, requestHandler]) => {
  pageRouter.get(endPoint, requestHandler)
})

export { pageRouter }
