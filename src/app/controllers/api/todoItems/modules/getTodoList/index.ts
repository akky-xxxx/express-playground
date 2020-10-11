// import node_modules
import { RequestHandler } from "express"

// import others
import { createLogger } from "../../../../../shared/utils/createLogger"
import { getTodoItems } from "../../../../../models/api/todoItems/getTodoItems"

// main
const logger = createLogger(__filename)
export const getTodoList: RequestHandler = async (_req, res) => {
  try {
    const todoList = await getTodoItems()
    res.status(200).json(todoList)
  } catch (error) {
    logger.error(error)
  }
}
