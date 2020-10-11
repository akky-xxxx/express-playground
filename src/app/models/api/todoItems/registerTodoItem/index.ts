// import node_modules
import { Request } from "express"
import mongoose from "mongoose"

// import others
import { todoItemModel } from "../../../../shared/models/todoItemModel"

// main
type RegisterTodoItem = (req: Request) => Promise<void>
export const registerTodoItem: RegisterTodoItem = async (req) => {
  const { body } = req
  try {
    if (!body.title) {
      const error = new Error("title なし")
      return Promise.reject(error)
    }

    await todoItemModel.create({
      title: body.title,
      description: body.description,
      is_done: false,
    })

    await mongoose.disconnect()

    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
