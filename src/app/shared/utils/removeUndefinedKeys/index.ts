// import
import { AnyObject } from "../../types/common"

// main
type RemoveUndefinedKey = (obj: AnyObject) => AnyObject
export const removeUndefinedKey: RemoveUndefinedKey = (obj) =>
  Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined),
  )
