import * as _MongoClient from "mongodb"

import {config} from "../config"

const MongoClient = _MongoClient.MongoClient
const {mongo} = config

if(!mongo) {
  throw new Error("mongo db config does not exist")
}

const uri = `mongodb+srv://${mongo.username}:${mongo.password}@resume-osj6d.mongodb.net/test?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true })

export const dbSet: Promise<_MongoClient.Db> = new Promise((resolve, reject) => {
  client.connect(async (err, db) => {
    if(err) {
      reject(err)
    } else {
      resolve(db.db("test"))
    }
  })
})
