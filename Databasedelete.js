const { MongoClient } = require("mongodb");

const url = "mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "DatabasedeleteName";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Database connected successfully");
        
        const db = client.db(dbName);  
        const userCollection = db.collection("Databasedelete");

            //      const rohit=   await userCollection.insertMany([
    //     { _id: 15, name: "pankaj", age: 30,course : "mern stack" },
    //     { _id: 16, name: "seth", age: 15, course: "mca" },
    //     { _id: 17, name: "bavli", age: 13, course: "bca" },
    //     {_id: 18, name: "sandy", age: 43, course: "mern stack"}
    //   ]);
    //   console.log(" update successfully",rohit);

        const gautam = await userCollection.drop();
        console.log("Collection dropped successfully:", gautam);
        
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
