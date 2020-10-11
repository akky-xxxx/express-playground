// import node_modules
import express from "express"
import helmet from "helmet"
import compression from "compression"

// import middleware
import { adjustCustomData } from "./middleware/adjustCustomData"

// import controllers
import { apiRouter } from "../../controllers/api"
import { pageRouter } from "../../controllers/pages"

// import others
import { APP_ROOT } from "../../shared/const/common"

// main
const app = express()
app.use(helmet())
app.use(compression())

app.set("trust proxy", 1)
app.set("views", `${APP_ROOT}/views/pages`)
app.set("view engine", "pug")

// register middleware
app.use(express.static(`${APP_ROOT}/assets`))
app.use(express.json())
app.use(adjustCustomData)

// register controllers
app.use("/api", apiRouter)
app.use(pageRouter)

export { app }
