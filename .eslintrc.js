/* eslint-disable @typescript-eslint/no-unused-vars */
const OFF = 0
const WARN = 1
const ERROR = 2
/* eslint-enable @typescript-eslint/no-unused-vars */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-nested-ternary": OFF,
    "import/prefer-default-export": OFF,
    "import/extensions": [
      "error",
      {
        js: "never",
        ts: "never",
      },
    ],
    "prettier/prettier": ERROR,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
}
