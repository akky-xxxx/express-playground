// import node_modules
import { Router } from "express"

import { todoListRouter } from "./todoItems"

// main
const apiRouter = Router()

apiRouter.use("/todo-items", todoListRouter)

export { apiRouter }
