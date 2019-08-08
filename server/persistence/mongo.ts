import * as _MongoClient from "mongodb"
import mongoose from "mongoose"

import {config} from "../config"

const {mongo} = config

if(!mongo) {
  throw new Error("mongo db config does not exist")
}

const uri = `mongodb+srv://${mongo.username}:${mongo.password}@resume-osj6d.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true })

const db = mongoose.connection

db.on("error", (err) => console.log("connection error: ", err))
db.once("open", () => console.log("mongodb.net/test connection open"))
