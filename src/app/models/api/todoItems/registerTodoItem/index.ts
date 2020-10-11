// import node_modules
import { Request } from "express"
import mongoose from "mongoose"

// import others
import { todoItemModel } from "../../../../shared/models/todoItemModel"
import { ThisError } from "../../../../shared/utils/ThisError"

// main
type RegisterTodoItem = (req: Request) => Promise<void>
export const registerTodoItem: RegisterTodoItem = async (req) => {
  const { body } = req
  try {
    if (!body.title) {
      const thisError = new ThisError({ status: 400, message: "title なし" })
      return Promise.reject(thisError)
    }

    await todoItemModel.create({
      title: body.title,
      description: body.description,
      is_done: false,
    })

    await mongoose.disconnect()

    return Promise.resolve()
  } catch (error) {
    const thisError = new ThisError({ error })
    return Promise.reject(thisError)
  }
}
