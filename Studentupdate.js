const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "StudentupdateName";
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    console.log("Database connected successfully");

    const db = client.db(dbName);
    const userCollection = db.collection("update");

    const dataUpdated = await userCollection.updateOne(
      { _id: 13 },
      { $set: { Name: "Marcoooo", age: 15 } },
      { upsert: true }
    );

    console.log("Data updated successfully", dataUpdated);
  } catch (error) {
    console.error(" Error:", error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
