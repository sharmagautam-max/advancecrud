require("mongodb");

const url="mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const { MongoClient } = require("mongodb");

const dbName = "Studentdata2Name";
const client = new MongoClient (url);
 
async function main() {
    try{
        await client.connect();
        console.log("database connected succesfully");
        const db =client.db(dbName);
        const userCollection = db.collection("user2");
        const MultipleUsers =await userCollection.insertMany([{_id:2,Name:"sunil", age:25},{_id:3,Name:"gautam",age:21},{_id:4,Name:"ram",age:23}]);
        console.log("Data updated successfully")
        }catch (error) {
            console.error("Error:", error);
        } 
        finally {
            await client.close();
        }
    }
    
    main().catch(console.error);
    
