// import node_modules
import { RequestHandler } from "express"

// import others
import { PageEndpoints } from "../../const/common"

// main
type PageEndpoints = typeof PageEndpoints
type PageEndpointKeys = keyof PageEndpoints
export type PageController = [PageEndpoints[PageEndpointKeys], RequestHandler]
