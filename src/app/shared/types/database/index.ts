// import node_modules
import { Document } from "mongoose"

// main
/* eslint-disable camelcase */
export type ToDoItem = {
  title: string
  description?: string
  is_done: boolean
} & Document
/* eslint-enable camelcase */
