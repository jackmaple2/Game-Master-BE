const { MongoClient } = require("mongodb");
const {password} = require("./db_password")
const uri =

  `mongodb+srv://emm__:Q6g5KV2L1SDZy6kb@cluster0.pfbhecj.mongodb.net`;

const client = new MongoClient(uri);
const dbConnection = (req, res) => {
  return client.connect()
};

const closeConnection = (req, res) => {
    return client.close()
}

// you will need to create your own db_password.js function
// make and export a function that just returns the password provided seperate to the repo
// if you do not call the file db_password then ensure it is still added to .git.ignore
// you will still need to connect to the db with mongoDB extention or in terminal to get up and running

const testSeed = (data) => {
    const db = client.db("game-master-test")
    return dbConnection()
    .then(() => {
        return db.collection("users").deleteMany({})
    })
    .then(() => {
        return db.collection("users").insertMany(data.users)
    })
    .then(() => {
        return db.collection("events").deleteMany({})
    })
    .then(() => {
        return db.collection("events").insertMany(data.events)
    })
}

module.exports = {testSeed, closeConnection, client}
