import * as fs from "fs"
import {createServer} from "./server"

const port = 9090

createServer().then(server => server.listen(port, (error) => {

  if(error) {
    throw error
  }

  const banner = fs.readFileSync("./banner.txt", "utf-8")

  console.log(banner)
  console.log(`mode: ${process.env.NODE_ENV}`)
  console.log(`server start ${port}`)

}))
