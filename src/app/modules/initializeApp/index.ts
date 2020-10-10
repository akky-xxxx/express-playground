// import node_modules
import express, { Application } from "express"

// import middleware
import { initializeSession } from "./middleware/initializeSession"
import { setSession } from "./middleware/setSession"
import { showSession } from "./middleware/showSession"

// import controllers
import { getPageRouter } from "../../controllers/pages"

// main
const app = express()
const pageRouter = getPageRouter()

type InitializeApp = () => Application
export const initializeApp: InitializeApp = () => {
  // common setting
  app.set("trust proxy", 1)
  app.set("views", "./src/app/views/pages")
  app.set("view engine", "pug")

  // register middleware
  app.use(express.json())
  app.use(initializeSession, setSession, showSession)

  // register controllers
  app.use(pageRouter)

  return app
}
