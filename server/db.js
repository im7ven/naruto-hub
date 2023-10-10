const { MongoClient } = require("mongodb");

let dbConnection;
const uri =
  "mongodb+srv://alexanderrr416:3089763982332Ja@cluster0.4loe46t.mongodb.net/naruto?retryWrites=true&w=majority";

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
