import { Request } from "express"

export type UniqueData = {
  auth: number
  name: string
}

export type UniqueSession = {
  uniqueData: Partial<UniqueData>
} & Request["session"]

export type UniqueReq = {
  unique?: Partial<UniqueData>
} & Request
