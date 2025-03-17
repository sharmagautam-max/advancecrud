require("mongodb");

const url = "mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const { MongoClient } = require("mongodb");

const dbName = "yourDatabaseName"; // <-- Define your database name here
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Database connected successfully");

        const db = client.db(dbName);
        const userCollection = db.collection("users");

        // Insert a single user
        const singleUser = await userCollection.insertOne({ _id: 1, name: "Vishal", age: 19 });
        console.log(singleUser)
        // const multipleUser= await userCollection.insertMany([{_id:10,name:"tanihsa",age:18},{_id:11,name:"Monty",age:19},{_id:12,name:"Goutam",age:18},{_id:13,name:"Deepak",age:18},]);


        //Read

        //for reading and particular collection we have to use find method.
        //in find method we can also provide a simple permeter _id: 1 .
        //in case when we have to read all users at that time we will empty object.
        // const allusers = collectionname.find({}).toArray(),
        //console.log(allusers).
        // console.log("MultipleUsers inserted successfully", multipleUser);
        // const allusers = await userCollection.find({}).toArray();
        // console.log("data found Succesfully.",allusers);
        //how to findout details of single user.
        // const singleUser =await userCollection.find({name:"tanihsa"}).toArray();
        // console.log("data found succesfully.",singleUser);
        //update method in mongodb.
        //set method->set method is use for update a specific value
        //updateOne method->user for update , what is for update and method of update.
        // const updateresult =await userCollection.updateOne({_id:1},{$set:{name:"tanisha_maharani"}});
        // console.log("7 Crore.",updateresult);
        //delete method-> Delete method is used for Delete any users detail it has two method delete single and delete many.
        //it only need one perameter on basis of that it will delete your data.
        // const deleteuser = await userCollection.deleteOne({name:"Monty"});
        // console.log("deleted",deleteuser);
    }
    catch (error) {
        console.error("Error:", error);
    } 
    finally {
        await client.close();
    }
}

main().catch(console.error);