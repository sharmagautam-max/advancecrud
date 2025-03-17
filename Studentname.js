const { MongoClient } = require("mongodb");

const url = "mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "StudentnameName";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Database connected successfully");

        const db = client.db(dbName);
        const userCollection = db.collection("Studentname");

        const rohit = await userCollection.find({ name: { $exists: true } }).toArray();
        console.log("succesfully", rohit);
      
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
