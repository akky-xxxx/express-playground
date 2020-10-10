// import node_modules
import { RequestHandler } from "express"

// import others
import { createLogger } from "../../../../shared/utils/createLogger"
import { hasUnique } from "../../../../shared/utils/hasUnique"

// main
const logger = createLogger(__filename)
export const showSession: RequestHandler = (req, _res, next) => {
  if (hasUnique(req)) {
    logger.trace(req.unique)
  }

  logger.trace(req.originalUrl)
  next()
}
