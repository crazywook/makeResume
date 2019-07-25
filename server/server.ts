import express from "express"
import next from "next"

const dev = process.env.NODE_ENV !== "production"
const nextApp = next({dev})
const handle = nextApp.getRequestHandler()

export async function createServer()
{
  await nextApp.prepare()
    .catch(e => {
      console.error(e.stack)
      process.exit(1)
    })

  const server = express()

  server.get("/api", (req, res) => {
    const page = "/index"

    res.send("api test")
  })

  server.get("/board/:title", (req, res) => {
      const page = "/index"
      const params = {title: req.params.title}
      nextApp.render(req, res, page, params)
  })

  server.get("*", (req, res) => {
      return handle(req, res)
  })

  return server
}
