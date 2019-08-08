import * as _MongoClient from "mongodb"
import mongoose, {Document, Schema} from "mongoose"
import {string} from "prop-types"

import {config} from "../config"

// import mongojs from "mongojs"
// import monk from "monk"

const MongoClient = _MongoClient.MongoClient
const {mongo} = config

if(!mongo) {
  throw new Error("mongo db config does not exist")
}

const uri = `mongodb+srv://${mongo.username}:${mongo.password}@resume-osj6d.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true })

const db = mongoose.connection

db.on("error", (err) => console.log("connection error: ", err))
db.once("open", (arg) => console.log("connection open", arg))

// const dbSet2 = monk(uri)
// const b = dbSet2.get("applicantInfo")
// const result = b.find({name: "김성욱"})
// result.then(r => console.log("monk", r))
// console.log("result", result)

// const mongojsDb = mongojs(uri)
// const a = mongojsDb.collection("applicantInfo")
// const result2 = a.find({}).toArray()
// console.log("result", result2)

// const client = new MongoClient(uri, { useNewUrlParser: true })
// export const dbSet: Promise<_MongoClient.Db> = new Promise((resolve, reject) => {
//   client.connect(async (err, db) => {
//     if(err) {
//       reject(err)
//     } else {
//       const test = db.db("test")
//       console.log("toArray", await test.collection("applicantInfo").find({}).toArray())
//       resolve(db.db("test"))
//     }
//   })
// })


