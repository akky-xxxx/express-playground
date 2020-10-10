// import
import { UniqueData } from "../../types/session"

// main
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const hasUniqueData = (data: any): data is UniqueData => {
  return typeof data?.name === "string" && typeof data?.auth === "number"
}
