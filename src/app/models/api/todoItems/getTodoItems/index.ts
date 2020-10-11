// import node_modules
import mongoose from "mongoose"
import { Request } from "express"

// import others
import { ToDoItem } from "../../../../shared/types/database"
import { todoItemModel } from "../../../../shared/models/todoItemModel"
import { getFindQuery } from "./modules/getFindQuery"
import { ThisError } from "../../../../shared/utils/ThisError"

// main
type GetTodoItems = (req: Request) => Promise<ToDoItem[]>
export const getTodoItems: GetTodoItems = async (req) => {
  const { query } = req
  const findQuery = getFindQuery(query)

  try {
    const todoList = await todoItemModel.find(findQuery)
    await mongoose.disconnect()
    return Promise.resolve(todoList)
  } catch (error) {
    const thisError = new ThisError({ error })
    return Promise.reject(thisError)
  }
}
