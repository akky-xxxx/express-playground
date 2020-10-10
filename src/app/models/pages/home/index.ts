// import
import { UniqueReq } from "../../../shared/types/session"
import { RenderOptions } from "../../../controllers/pages/home/types"

// main
type GetRenderOptions = (req: UniqueReq) => RenderOptions
export const getRenderOptions: GetRenderOptions = (req) => {
  return {
    message: "Home",
    name: req.unique?.name || "",
  }
}
