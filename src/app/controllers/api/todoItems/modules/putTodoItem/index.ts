import { RequestHandler } from "express"

import { updateTodoItem } from "../../../../../models/api/todoItems/updateTodoItem"
import { createLogger } from "../../../../../shared/utils/createLogger"

// main
const logger = createLogger(__filename)
export const putTodoItem: RequestHandler = async (req, res) => {
  try {
    await updateTodoItem(req)
    res.status(200).json({ success: true })
  } catch (error) {
    logger.error(error)
    res.status(error?.status || 500).send(error.toString())
  }
}
