const { MongoClient, MongoDBCollectionNamespace } = require("mongodb");

require("mongodb");

const url="mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName ="StudentfeesName";
const client = new MongoClient(url);
 
async function main() {
    try{
        await client .connect();
        console.log("data base conenected successfully");
    
        const db = client.db(dbName);
        const userCollection=db.collection("Studentfees");

    //      const rohit=   await userCollection.insertMany([
    //     { _id: 15, name: "pankaj", age: 30,course : "web devlopment",fees:10000 },
    //     { _id: 16, name: "seth", age: 15, course: "web devlopment",fees:10000  },
    //     { _id: 17, name: "bavli", age: 13, course: "web devlopment",fees:10000  },
    //     {_id: 18, name: "sandy", age: 43, course: "web devlopment",fees:10000 }
    //   ]);
    //   console.log(" update successfully",rohit);
    const gautam = await userCollection.updateMany(
        { age: { $lt: 20 } }, 
        { $mul: { fees: 1.10 } } 
    );

    console.log(gautam)
    } catch (error) {
        console.error("Error:", error);
      } finally {
        await client.close();
    }
    }
    main().catch(console.error);