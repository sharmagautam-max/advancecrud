
require("mongodb");

const url = "mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const { MongoClient } = require("mongodb");
const client = new MongoClient(url)
const dbName="users"

async function main(){
    try{
        await client.connect()
        console.log("database is connected successfully")
        const db=client.db(dbName)
        const usersCollection = db.collection("users");
        const productCollection = db.collection("product");
    //   const result=  await usersCollection.aggregate([
    //     {$match:{age:{$gt:30}}}
    //   ]).toArray();
    //   console.log(result)
    // const res = await productCollection.aggregate([
    //     {$group:{_id:"$category"}}
    // ]).toArray();
    // console.log(res)
    // const res = await productCollection.aggregate([
    //     {$group:{_id:"$category",totalProduct:{$sum:1}}}
    // ]).toArray();
    // console.log(res)
    // const result = await productCollection.aggregate([
    //     {$sort:{price:-1}}
    // ]).toArray();
    // console.log(result)
    // const result = await productCollection.aggregate([
    //     {$sort:{price:+1}}
    // ]).toArray();
    // console.log(result)
    // const result = await productCollection.aggregate([
    //     {$project:{name:1,category:1,price:1,_id:0}}
    // ]).toArray();
    // console.log(result)
    const result = await usersCollection.aggregate([
        {$lookup:{
            from:"product",
            localField:"_id",
            foreignField:"user_id",
            as:"purchasedProduct"
        }},
        {$unwind:"$purchasedProduct"}
    ]).toArray();
    console.log(result)
    //    await usersCollection.insertMany([
    //         { _id: 1, name: "Amit", age: 25, city: "Delhi" },
    //         { _id: 2, name: "Suman", age: 30, city: "Mumbai" },
    //         { _id: 3, name: "Ravi", age: 22, city: "Bangalore" },
    //         { _id: 4, name: "Priya", age: 27, city: "Kolkata" },
    //         { _id: 5, name: "Vikram", age: 35, city: "Pune" },
    //         { _id: 6, name: "Neha", age: 29, city: "Chennai" },
    //         { _id: 7, name: "Rahul", age: 32, city: "Hyderabad" },
    //         { _id: 8, name: "Swati", age: 24, city: "Jaipur" },
    //         { _id: 9, name: "Anil", age: 40, city: "Ahmedabad" },
    //         { _id: 10, name: "Pooja", age: 26, city: "Indore" }
    //       ])

    //     await  productCollection.insertMany([
    //         { _id: 101, name: "Laptop", category: "Electronics", price: 50000, user_id: 1 },
    //         { _id: 102, name: "Mobile", category: "Electronics", price: 20000, user_id: 2 },
    //         { _id: 103, name: "Shoes", category: "Fashion", price: 3000, user_id: 3 },
    //         { _id: 104, name: "Watch", category: "Fashion", price: 7000, user_id: 4 },
    //         { _id: 105, name: "TV", category: "Electronics", price: 40000, user_id: 5 },
    //         { _id: 106, name: "Headphones", category: "Electronics", price: 2500, user_id: 6 },
    //         { _id: 107, name: "Jeans", category: "Fashion", price: 1500, user_id: 7 },
    //         { _id: 108, name: "T-Shirt", category: "Fashion", price: 1200, user_id: 8 },
    //         { _id: 109, name: "Refrigerator", category: "Appliances", price: 30000, user_id: 9 },
    //         { _id: 110, name: "Microwave", category: "Appliances", price: 10000, user_id: 10 }
    //       ])
        
console.log("data has been successuffuly inserted in collection")
        }
        catch(error){
            console.log(error);
        }
        finally{
            await client.close();
        }
    }
    
    main().catch(console.error);
