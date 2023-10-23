const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");

// init app & middleware
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Db connection
let db;

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log(`App listening on port ${port}`);
    });
    db = getDb();
  } else {
    res
      .status(500)
      .json({ status: "failed", message: "Internal Server Error" });
  }
});

app.get("/characters", async (req, res) => {
  try {
    const characters = await db.collection("characters").find().toArray();
    res
      .status(200)
      .json({ status: "success", amount: characters.length, data: characters });
  } catch (err) {
    res
      .status(500)
      .json({ status: "failed", message: "Internal Server Error" });
  }
});
