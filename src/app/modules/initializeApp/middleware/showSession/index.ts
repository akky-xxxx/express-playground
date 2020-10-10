// import node_modules
import { RequestHandler } from "express"

// import others
import { createLogger } from "../../../../shared/utils/createLogger"
import { hasUniqueSession } from "../../../../shared/utils/hasUniqueSession"
import { hasUniqueData } from "../../../../shared/utils/hasUniqueData"
import { hasUnique } from "../../../../shared/utils/hasUnique"

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

  if (hasUnique(req)) {
    logger.trace(req.unique)
  }

  logger.trace(req.session.uniqueData)
  logger.trace(req.originalUrl)
  next()
}
