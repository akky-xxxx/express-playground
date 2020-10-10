// import node_modules
import { SessionOptions } from "express-session"

// main
export const PORT = 3000

export const SESSION_OPTIONS: SessionOptions = {
  secret: "secret key",
  resave: false, // cspell:disable-line
  saveUninitialized: true,
  cookie: { secure: true },
}

export const PageEndpoints = {
  HOME: "/",
} as const
