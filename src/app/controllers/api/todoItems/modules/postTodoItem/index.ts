import { RequestHandler } from "express"

import { registerTodoItem } from "../../../../../models/api/todoItems/registerTodoItem"
import { createLogger } from "../../../../../shared/utils/createLogger"

// main
const logger = createLogger(__filename)
export const postTodoItem: RequestHandler = async (req, res) => {
  try {
    await registerTodoItem(req)
    res.status(200).json({ success: true })
  } catch (error) {
    logger.error(error)
  }
}
