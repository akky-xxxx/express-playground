// import node_modules
import { RequestHandler } from "express"

// import others
import { initializeCustomData } from "./modules/initializeCustomData"
import { setCustomData } from "./modules/setCustomData"
import { showCustomData } from "./modules/showCustomData"

type AdjustCustomData = RequestHandler[]
export const adjustCustomData: AdjustCustomData = [
  initializeCustomData,
  setCustomData,
  showCustomData,
]
