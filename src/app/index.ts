// import modules
import { app } from "./modules/initializeApp"
import { createLogger } from "./shared/utils/createLogger"

// import const
import { PORT } from "./shared/const/common"

// main
const logger = createLogger(__filename)

app.listen(PORT, () => {
  logger.trace(`server started on http://localohst:${PORT}`)
})
