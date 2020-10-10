// import node_modules
import { RequestHandler } from "express"

// import others
import { hasUnique } from "../../../shared/utils/hasUnique"
import { PageController } from "../../../shared/types/common"
import { PageEndpoints } from "../../../shared/const/common"
import { createLogger } from "../../../shared/utils/createLogger"
import { getRenderOptions } from "../../../models/pages/home"

// main
const logger = createLogger(__filename)
const home: RequestHandler = (req, res) => {
  if (!hasUnique(req)) {
    res.send("error!")
    return
  }

  const renderOption = getRenderOptions(req)
  logger.trace(`rendered "${PageEndpoints.HOME}"`)
  res.render("home", renderOption)
}

export const homeController: PageController = [PageEndpoints.HOME, home]
