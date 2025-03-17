const { MongoClient, MongoDBCollectionNamespace } = require("mongodb");

require("mongodb");

const url="mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName ="StudentageName";
const client = new MongoClient(url);

async function main() {
    try{
    await client .connect();
    console.log("data base conenected successfully");

    const db = client.db(dbName);
    const userCollection=db.collection("Studentage");

 const mohit=   await userCollection.insertMany([
        { _id: 15, name: "pankaj", age: 30, add: "fatehabad" },
        { _id: 16, name: "seth", age: 15, add: "kalwas" },
        { _id: 17, name: "bavli", age: 13, add: "mehndergarh" },
        {_id: 18, name: "sandy", age: 43, add: "hisar"}
      ]);
      console.log("age update successfully",mohit);
const gautam = await userCollection.find({age:{$gt:18}}).toArray()
console.log("okkk",gautam)
    } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
}
}
main().catch(console.error);