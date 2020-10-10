// import node_modules
import { RequestHandler } from "express"

// main
export const initializeSession: RequestHandler = (req, _res, next) => {
  if (req.session) {
    req.session.uniqueData = {}
  }

  next()
}
