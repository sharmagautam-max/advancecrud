const { MongoClient } = require("mongodb");

const url = "mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "StudentretrieveName";
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    console.log("Database connected successfully");

    const db = client.db(dbName);
    const userCollection = db.collection("usersretrieve");

    await userCollection.insertMany([
      { _id: 15, name: "pankaj", age: 30, add: "fatehabad" },
      { _id: 16, name: "seth", age: 32, add: "kalwas" },
      { _id: 17, name: "bavli", age: 33, add: "mehndergarh" },
    ]);

    const users = await userCollection.find({}, { projection: { _id: 0, name: 1, age: 1 } }).toArray();

    console.log("Retrieved Users:", users);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
