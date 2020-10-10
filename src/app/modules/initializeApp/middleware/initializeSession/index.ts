// import node_modules
import { RequestHandler } from "express"

// import others
import { UniqueReq } from "../../../../shared/types/session"

// main
export const initializeSession: RequestHandler = (req, _res, next) => {
  ;(req as UniqueReq).unique = {}

  next()
}
