// import node_modules
import express, { Application } from "express"
import session from "express-session"

// import middleware
import { initializeSession } from "./middleware/initializeSession"
import { setSession } from "./middleware/setSession"
import { showSession } from "./middleware/showSession"

// import controllers
import { pagesControllers } from "../../controllers/pages"

// import const
import { SESSION_OPTIONS } from "../../shared/const/common"

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
  app.use(session(SESSION_OPTIONS))
  app.use(initializeSession, setSession, showSession)

  // register controllers
  pagesControllers.forEach(([endPoint, requestHandler]) => {
    app.get(endPoint, requestHandler)
  })

  return app
}
