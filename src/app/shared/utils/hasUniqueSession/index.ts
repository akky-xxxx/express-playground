// import
import { UniqueSession } from "../../types/session"

// main
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const hasUniqueSession = (session: any): session is UniqueSession => {
  return typeof session.uniqueData === "object"
}
