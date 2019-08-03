import "reflect-metadata"

import cors from "cors"
import express from "express"
import next from "next"
import * as path from "path"
import {useExpressServer} from "routing-controllers"

import * as corsOption from "./cors.json"

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
  server.use(express.json())
  server.use(cors(corsOption))

  useExpressServer(server, buildRoutingControllersOption())

  const notApiRegex = /^(?!\/api)/
  server.get("*", (req, res) => {

    if(notApiRegex.test(req.url)) {
      return handle(req, res)
    }
  })

  return server
}

function buildRoutingControllersOption()
{
  return {
    routePrefix: "/api",
    classTransformer: true,
    defaultErrorHandler: false,
    controllers: [
      path.resolve(__dirname, "model/**/*.controller{.ts,.js}"),
    ],
  }
}
