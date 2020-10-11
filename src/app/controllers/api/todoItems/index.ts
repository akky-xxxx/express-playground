// import node_modules
import { Router } from "express"

import { connectMongoose } from "../../../shared/utils/connectMongoose"

import { getTodoList } from "./modules/getTodoList"
import { postTodoItem } from "./modules/postTodoItem"

// main
const todoListRouter = Router()

todoListRouter.use(async (_req, _res, next) => {
  await connectMongoose()
  next()
})

todoListRouter.get("/", getTodoList)
todoListRouter.post("/", postTodoItem)

export { todoListRouter }
