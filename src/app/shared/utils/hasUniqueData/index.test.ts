// import
import { hasUniqueData } from "./index"
import { UniqueData } from "../../types/session"

// main
describe("hasUniqueData", () => {
  it("unique data の形式が一致するときは true を返す", () => {
    const data: UniqueData = {
      auth: 1,
      name: "Taro",
    }
    expect(hasUniqueData(data)).toBe(true)
  })

  describe("unique data のプロパティが不足している時は false を返す", () => {
    it("name なし", () => {
      const data: Partial<UniqueData> = {
        auth: 1,
      }
      expect(hasUniqueData(data)).toBe(false)
    })

    it("auth なし", () => {
      const data: Partial<UniqueData> = {
        name: "Taro",
      }
      expect(hasUniqueData(data)).toBe(false)
    })
  })

  describe("unique data のプロパティの型が異なる時は false を返す", () => {
    it("auth が number ではない", () => {
      const data = {
        auth: "1",
        name: "Taro",
      }
      expect(hasUniqueData(data)).toBe(false)
    })

    it("name が string ではない", () => {
      const data = {
        auth: 1,
        name: 1,
      }
      expect(hasUniqueData(data)).toBe(false)
    })
  })
})
