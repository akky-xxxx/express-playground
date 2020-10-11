// import node_modules
import mongoose from "mongoose"

// import others
import { ToDoItem } from "../../../../shared/types/database"
import { todoItemModel } from "../../../../shared/models/todoItemModel"

// main
type GetTodoItems = () => Promise<ToDoItem[]>
export const getTodoItems: GetTodoItems = async () => {
  try {
    const todoList = await todoItemModel.find()
    await mongoose.disconnect()
    return Promise.resolve(todoList)
  } catch (error) {
    return Promise.reject(error)
  }
}
