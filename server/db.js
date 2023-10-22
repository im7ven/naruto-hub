require("dotenv").config();

const { MongoClient } = require("mongodb");

let dbConnection;
const uri = process.env.MONGODB_URI;

module.exports = {
  connectToDb: (callback) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return callback();
      })
      .catch((err) => {
        console.log(err);
        return callback(err);
      });
  },
  getDb: () => dbConnection,
};
