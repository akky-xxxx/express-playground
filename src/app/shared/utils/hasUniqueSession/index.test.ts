// import
import { hasUniqueSession } from "./index"
import { UniqueSession } from "../../types/session"

// main
describe("hasUniqueSession", () => {
  it("session に uniqueData があり、 object の場合は true を返す", () => {
    const session: Omit<UniqueSession, "uniqueData"> = { uniqueData: {} }
    expect(hasUniqueSession(session)).toBe(true)
  })

  it("session に uniqueData があり、 object でない場合は false を返す", () => {
    const session = { uniqueData: "" }
    expect(hasUniqueSession(session)).toBe(false)
  })

  it("session に uniqueData がない場合は false を返す", () => {
    const session: Omit<UniqueSession, "uniqueData"> = {}
    expect(hasUniqueSession(session)).toBe(false)
  })
})
