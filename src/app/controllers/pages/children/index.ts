// import node_modules
import { RequestHandler } from "express"

// import others
import { hasUnique } from "../../../shared/utils/hasUnique"
import { PageController } from "../../../shared/types/common"
import { PageEndpoints } from "../../../shared/const/common"
import { createLogger } from "../../../shared/utils/createLogger"

// main
const logger = createLogger(__filename)
const children: RequestHandler = (req, res) => {
  if (!hasUnique(req)) {
    res.send("error!")
    return
  }

  logger.trace(`rendered "${PageEndpoints.CHILDREN}"`)
  res.render("children")
}

export const childrenController: PageController = [
  PageEndpoints.CHILDREN,
  children,
]
