// import
import { removeUndefinedKey } from "./index"

// main
const inputObj = {
  name: undefined,
  age: null,
  gender: 1,
}

const expectObj = {
  age: null,
  gender: 1,
}

describe("removeUndefinedKey の test", () => {
  it("undefined の key だけ除去した object を返す", () => {
    expect(removeUndefinedKey(inputObj)).toEqual(expectObj)
  })
})
