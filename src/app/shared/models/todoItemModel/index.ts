// import node_modules
import mongoose, { Schema } from "mongoose"

// import others
import { ToDoItem } from "../../types/database"

// main
const todoItemScheme = new Schema<ToDoItem>({
  title: { type: String, require: true },
  description: { type: String },
  is_done: { type: Boolean, require: true },
})

export const todoItemModel = mongoose.model<ToDoItem>(
  "todo_items",
  todoItemScheme,
)
