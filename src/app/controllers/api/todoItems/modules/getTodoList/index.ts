// import node_modules
import { RequestHandler } from "express"

// import others
import { createLogger } from "../../../../../shared/utils/createLogger"
import { getTodoItems } from "../../../../../models/api/todoItems/getTodoItems"

// main
const logger = createLogger(__filename)
export const getTodoList: RequestHandler = async (req, res) => {
  try {
    const todoList = await getTodoItems(req)
    res.status(200).json(todoList)
  } catch (error) {
    logger.error(error)
    res.status(error?.status || 500).send(error.toString())
  }
}
