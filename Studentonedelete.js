const { MongoClient } = require("mongodb");

const url = "mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "StudentonedeleteName";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Database connected successfully");

        const db = client.db(dbName);
        const userCollection = db.collection("delete");
        // const multipleUser = await userCollection.insertMany([
        //     { _id: 5, Name: "arun", age: 29, add: "mingnikheda" },
        //     { _id: 6, Name: "sahil", age: 31, add: "bhattu" },
        //     { _id: 7, Name: "sandeep", age: 24, add: "seuwa" },
        //   ]);
        //   console.log("Data updated successfully");

      const gautam = await userCollection.deleteOne({Name:"arun"});
      console.log("data deleted",gautam)

        
    } catch (error) {
        console.error(" Error:", error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
