// import node_modules
import { Request } from "express"
import mongoose from "mongoose"

// import others
import { todoItemModel } from "../../../../shared/models/todoItemModel"
import { removeUndefinedKey } from "../../../../shared/utils/removeUndefinedKeys"

// main
type UpdateTodoItem = (req: Request) => Promise<void>
export const updateTodoItem: UpdateTodoItem = async (req) => {
  const { body } = req
  if (!body.id) {
    const error = new Error("id なし")
    return Promise.reject(error)
  }

  if (!body.title && !body.description && !body.is_done) {
    const error = new Error("更新項目 なし")
    return Promise.reject(error)
  }

  const updateBody = removeUndefinedKey({
    title: body.title,
    description: body.description,
    is_done: body.is_done,
  })

  try {
    await todoItemModel.update({ _id: body.id }, updateBody)
    await mongoose.disconnect()
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
