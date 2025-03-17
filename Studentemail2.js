require("mongodb");

const url =
  "mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const { MongoClient } = require("mongodb");

const dbName = "Studentemail2Name";
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    console.log("database connected succesfully");
    const db = client.db(dbName);
    const userCollection = db.collection("Studentemail");
    // const multipleUser = await userCollection.insertMany([
    //   { _id: 8, Name: "moty", age: 29, add: "sorhi", email: "Monty@gmail.com" },
    //   {
    //     _id: 9,
    //     Name: "vikash",
    //     age: 31,
    //     add: "sirsa",
    //     email: "Vikash@gmail.com",
    //   },
    //   {
    //     _id: 10,
    //     Name: "kuldeep",
    //     age: 24,
    //     add: "rajgarh",
    //     email: "",
    //   },
    // ]);
    const gautam = await userCollection.updateMany(
        { email: { $exists: true, $ne: "" } }, 
      [{ $set: { email: { $toLower: "$email" } } }]
    );
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
