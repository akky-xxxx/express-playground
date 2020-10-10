// import node_modules
import express, { Application } from "express"

// import middleware
import { initializeCustomData } from "./middleware/initializeCustomData"
import { setCustomData } from "./middleware/setCustomData"
import { showCustomData } from "./middleware/showCustomData"

// import controllers
import { pageRouter } from "../../controllers/pages"

// main
const app = express()

type InitializeApp = () => Application
export const initializeApp: InitializeApp = () => {
  // common setting
  app.set("trust proxy", 1)
  app.set("views", "./src/app/views/pages")
  app.set("view engine", "pug")

  // register middleware
  app.use(express.json())
  app.use(initializeCustomData, setCustomData, showCustomData)

  // register controllers
  app.use(pageRouter)

  return app
}
