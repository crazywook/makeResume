import {Db} from "mongodb"

declare module mongojs {
  function mongojs(url: string): Db
  export = mongojs
}