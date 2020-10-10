// import node_modules
import { RequestHandler } from "express"

// import others
import { hasUnique } from "../../../../shared/utils/hasUnique"

// main
export const setCustomData: RequestHandler = (req, _res, next) => {
  if (hasUnique(req)) {
    req.unique = {
      auth: 12,
      name: "michel",
    }
  }

  next()
}
