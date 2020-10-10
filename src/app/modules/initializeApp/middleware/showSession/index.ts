// import node_modules
import { RequestHandler } from "express"

// import others
import { createLogger } from "../../../../shared/utils/createLogger"
import { hasUniqueSession } from "../../../../shared/utils/hasUniqueSession"
import { hasUniqueData } from "../../../../shared/utils/hasUniqueData"

// main
const logger = createLogger(__filename)
export const showSession: RequestHandler = (req, res, next) => {
  if (
    !hasUniqueSession(req.session) ||
    !hasUniqueData(req.session.uniqueData)
  ) {
    res.redirect("/error")
    return
  }

  logger.trace(req.session.uniqueData)
  logger.trace(req.originalUrl)
  next()
}
