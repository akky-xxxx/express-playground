// import node_modules
import { Request } from "express"

// import others
import { ToDoItem } from "../../../../../../shared/types/database"

// main
type GetFindQuery = (query: Request["query"]) => Partial<ToDoItem>
export const getFindQuery: GetFindQuery = (query) => {
  const findQuery: Partial<ToDoItem> = {}
  if (typeof query.is_done !== "undefined")
    findQuery.is_done = query.is_done === "true"
  if (typeof query.title === "string") findQuery.title = query.title
  if (typeof query.description === "string")
    findQuery.description = query.description

  return findQuery
}
