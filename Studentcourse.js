const { MongoClient, MongoDBCollectionNamespace } = require("mongodb");

require("mongodb");

const url="mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName ="StudentcourseName";
const client = new MongoClient(url);
 
async function main() {
    try{
        await client .connect();
        console.log("data base conenected successfully");
    
        const db = client.db(dbName);
        const userCollection=db.collection("Studentcourse");

    //      const rohit=   await userCollection.insertMany([
    //     { _id: 15, name: "pankaj", age: 30,course : "mern stack" },
    //     { _id: 16, name: "seth", age: 15, course: "mca" },
    //     { _id: 17, name: "bavli", age: 13, course: "bca" },
    //     {_id: 18, name: "sandy", age: 43, course: "mern stack"}
    //   ]);
    //   console.log(" update successfully",rohit);
    const rohit= await userCollection.find({course:{$in:["mern stack"]}}).toArray()
    console.log("success",rohit)
    
    } catch (error) {
        console.error("Error:", error);
      } finally {
        await client.close();
    }
    }
    main().catch(console.error);