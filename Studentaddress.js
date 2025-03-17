require("mongodb");

const url =
  "mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const { MongoClient } = require("mongodb");

const dbName = "StudentaddressName";
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    console.log("database connected succesfully");
    const db = client.db(dbName);
    const userCollection = db.collection("address");
    const multipleUser = await userCollection.insertMany([
      { _id: 5, Name: "arun", age: 29, add: "mingnikheda" },
      { _id: 6, Name: "sahil", age: 31, add: "bhattu" },
      { _id: 7, Name: "sandeep", age: 24, add: "" },
    ]);
    console.log("Data updated successfully");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
