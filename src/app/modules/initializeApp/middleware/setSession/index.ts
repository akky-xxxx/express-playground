// import node_modules
import { RequestHandler } from "express"

// import others
import { hasUniqueSession } from "../../../../shared/utils/hasUniqueSession"
import { hasUnique } from "../../../../shared/utils/hasUnique"

// main
export const setSession: RequestHandler = (req, res, next) => {
  if (!hasUniqueSession(req.session)) {
    res.redirect("/error")
    return
  }

  if (hasUnique(req)) {
    req.unique = {
      auth: 12,
      name: "michel",
    }
  }

  req.session.uniqueData = {
    auth: 1,
    name: "Taro",
  }
  next()
}
