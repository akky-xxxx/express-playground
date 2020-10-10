// import node_modules
import { RequestHandler } from "express"

// import others
import { hasUniqueSession } from "../../../../shared/utils/hasUniqueSession"

// main
export const setSession: RequestHandler = (req, res, next) => {
  if (!hasUniqueSession(req.session)) {
    res.redirect("/error")
    return
  }

  req.session.uniqueData = {
    auth: 1,
    name: "Taro",
  }
  next()
}
