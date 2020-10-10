import { Request } from "express"

export type UniqueData = {
  auth: number
  name: string
}

export type UniqueReq = {
  unique?: Partial<UniqueData>
} & Request
