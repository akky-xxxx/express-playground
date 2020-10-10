// import
import { UniqueReq } from "../../types/session"

// main
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const hasUnique = (req: any): req is UniqueReq => {
  return typeof req.unique === "object"
}
