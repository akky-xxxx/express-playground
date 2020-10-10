// import
import { hasUnique } from "./index"
import { UniqueReq } from "../../types/session"

// main
describe("hasUnique", () => {
  it("req に unique があり、 object の場合は true を返す", () => {
    const req: Pick<UniqueReq, "unique"> = { unique: {} }
    expect(hasUnique(req)).toBe(true)
  })

  it("req に unique があり、 object でない場合は false を返す", () => {
    const req = { uniqueData: "" }
    expect(hasUnique(req)).toBe(false)
  })

  it("req に unique がない場合は false を返す", () => {
    const req: Partial<UniqueReq> = {}
    expect(hasUnique(req)).toBe(false)
  })
})
