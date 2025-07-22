const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/");

let db;

app.use(express.json());

const connectDB = async () => {
  await client.connect();
  console.log("mongodb connected");
  db = client.db("node_db");
  console.log("database created");
  const collection = db.collection("demo");
  console.log("collection created in database");
  await db.collection("demo").insertOne({ name: "sharath", age: 20 });
};
connectDB();

app.post("/add", async (req, res) => {
  try {
    await db.collection("demo").insertOne(req.body);
    res.send("info added");
  } catch (error) {
    res.status(400).send("unable to add info");
  }
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});