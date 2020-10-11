// import node_modules
import { Request } from "express"
import mongoose from "mongoose"

// import others
import { todoItemModel } from "../../../../shared/models/todoItemModel"
import { removeUndefinedKey } from "../../../../shared/utils/removeUndefinedKeys"
import { ThisError } from "../../../../shared/utils/ThisError"

// main
type UpdateTodoItem = (req: Request) => Promise<void>
export const updateTodoItem: UpdateTodoItem = async (req) => {
  const { body } = req
  if (!body.id) {
    const thisError = new ThisError({ status: 400, message: "id なし" })
    return Promise.reject(thisError)
  }

  if (!body.title && !body.description && !body.is_done) {
    const thisError = new ThisError({ status: 400, message: "更新項目 なし" })
    return Promise.reject(thisError)
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
    const thisError = new ThisError({ error })
    return Promise.reject(thisError)
  }
}
