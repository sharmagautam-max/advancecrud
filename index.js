
require("mongodb");

const url ="mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const{MongoClient}=require("mongodb");
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Data base is connected successfully");

    }catch(error){
        console.log(error);
    }
}
main().catch(console.error);