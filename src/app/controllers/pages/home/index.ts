// import node_modules
import { RequestHandler } from "express"

// import others
import { hasUniqueSession } from "../../../shared/utils/hasUniqueSession"
import { hasUniqueData } from "../../../shared/utils/hasUniqueData"
import { hasUnique } from "../../../shared/utils/hasUnique"
import { PageController } from "../../../shared/types/common"
import { PageEndpoints } from "../../../shared/const/common"
import { RenderOptions } from "./types"

// main
const home: RequestHandler = (req, res) => {
  if (
    !hasUniqueSession(req.session) ||
    !hasUniqueData(req.session.uniqueData)
  ) {
    res.send("error!")
    return
  }
  if (!hasUnique(req)) {
    res.send("error!")
    return
  }
  const renderOption: RenderOptions = {
    message: "Home",
    name: req.unique?.name || "",
  }
  res.render("home", renderOption)
}

export const homeController: PageController = [PageEndpoints.HOME, home]
