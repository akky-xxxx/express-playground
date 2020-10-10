// import node_modules
import { getLogger, Logger } from "log4js"

// main
type CreateLogger = (filePath: string) => Logger
export const createLogger: CreateLogger = (filePath) => {
  const logger = getLogger(`[${filePath.slice(filePath.lastIndexOf("src"))}]`)
  logger.level = "trace"
  return logger
}
