import * as _MongoClient from "mongodb"

import {config} from "../config"

const MongoClient = _MongoClient.MongoClient
const {mongo} = config

if(!mongo) {
  throw new Error("mongo db config does not exist")
}

const uri = `mongodb+srv://${mongo.username}:${mongo.password}@resume-osj6d.mongodb.net/test?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err => {
  const collection = client.db("test").collection("devices")
  // perform actions on the collection object
  console.log(collection)
  client.close()
})

export default 1
