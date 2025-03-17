require("mongodb");

const url="mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const { MongoClient } = require("mongodb");

const dbName = "StudentdataName";
const client = new MongoClient (url);
 
async function main() {
    try{
        await client.connect();
        console.log("database connected succesfully");
        const db =client.db(dbName);
        const userCollection = db.collection("users");
        const singleUser =await userCollection.insertOne({_id:2,Name:"sunil", age:25});
        console.log(singleUser)
        }catch (error) {
            console.error("Error:", error);
        } 
        finally {
            await client.close();
        }
    }
    
    main().catch(console.error);
    
