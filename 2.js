const url = "mongodb+srv://gs3756660:TnAC5x58q25mS6ML@cluster0.tpcbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const { MongoClient } = require("mongodb");
const { log } = require("node:console");
const client = new MongoClient(url)
const dbName="gautam"

async function main(){
    try{
        await client.connect()
        console.log("database is connected successfully")
        const db=client.db(dbName)
        const usersCollection = db.collection("users");
        const reviewCollection = db.collection("review");
        const paymentCollection = db.collection("payment");
        const orderCollection = db.collection("order");
        const productCollection = db.collection("product");
        //quetion-1
        // const result= await usersCollection.aggregate([
        //     {$match:{age:{$gt:30}}}
        // ]).toArray();
        // console.log(result);

        //quetion-2
        // const result= await productCollection.aggregate([
        //     {$match:{price:{$gt:10000}}}
        // ]).toArray();
        // console.log(result);

        //quetion-3
        // const result= await productCollection.aggregate([
        //     {$group:{_id:"$category"}}
        // ]).toArray();
        // console.log(result);

        //quetion-4
        // await usersCollection.updateMany({},[
        //     {$set:{created_at:{$toDate:"$created_at"}}}
        // ]);
        // const result= await userCollection.aggregate([
        //     {$match:{created_at:{$gt:new Date("2024-01-01")}}}
        // ]).toArray();
        // console.log(result);

        //quetion-5
        // const result= await productCollection.aggregate([
        //     {$match:{category:"Fashion"}},
        //     {$group:{_id:"null",totalstock:{$sum:"$stock"}}}
        // ]).toArray()
        // console.log(result);

        //quetion-6
        // const result= await productCollection.aggregate([
        //     {$match:{category:"Fashion"}},
        //     {$group:{_id:"null",totalstock:{$sum:"$stock"}}}
        // ]).toArray()
        // console.log(result);

        //quetion-7
        // const result= await usersCollection.aggregate([
        //     {$match:{city:{$in:["Mumbai","Delhi"]}}}
        // ]).toArray()
        // console.log(result);

        //quetion-8
        // const result= await reviewCollection.aggregate([
        //     {$match:{rating:{$gt:4.5}}}
        // ]).toArray()
        // console.log(result);

        //quetion-9
        // const result= await productCollection.aggregate([
        //     {$sort:{price:-1}}
        // ]).toArray()
        // console.log(result);

        //quetion-10
        // const result= await productCollection.aggregate([
        //     {$project:{_id:0,name:1,price:1}}
        // ]).toArray()
        // console.log(result);

        //quetion-11
        // const result= await productCollection.aggregate([
            // {$group:{_id:null,"averageprice":{$avg:"$price"}}}
        // ]).toArray()
        // console.log(result);

        //quetion-12
        // const result= await productCollection.aggregate([
        //     {$group:{_id:"$category","expensiveproduct":{$max:"$price"}}}
        // ]).toArray()
        // console.log(result);

        //quetion-13
        // const result= await orderCollection.aggregate([
        //     {$group:{_id:"$category","placed an order":{$sum:"$quantity"}}}
        // ]).toArray()
        // console.log(result);
  
        //quetion-13
        // const result= await paymentCollection.aggregate([
        //     {$group:{_id:"$category","total sales amount":{$sum:"$amount"}}}
        // ]).toArray()
        // console.log(result);

        //quuetion-16
        // const result= await productCollection.aggregate([
        //     {$group:{_id:"$category","top three most expensive product":{$sum:"$price"}}}
            
        // ]).toArray();
        // console.log(result);

        // quetion 14

        // const result= await orderCollection.aggregate([
        //     {$match:{status:{$eq:"pending"}}}
            
        // ]).toArray();
        // console.log(result);

  //Question->15
        // const result=await orderCollection.aggregate([
        //     {$match:{status:"Delivered"}},
        //     {$lookup:
        //         {
        //             from:"product",
        //             localField:"product_id",
        //             foreignField:"_id",
        //             as:"productDetails"
        //         }
        //     },
        //     {$unwind:"$productDetails"},
        //     {$group:{_id:null,totalEarning:{$sum:{$multiply:["$quantity","$productDetails.price"]}}}}
        // ]).toArray()
        // console.log(result)

        //quetion 17

        //  const result=await usersCollection.aggregate([
           
        //     {$lookup:{
        //         from:"order",
        //         localField:"user_id",
        //         foreignField:"users",
        //         as:"orderdetails"
        //     }},
        //     {
        //         $match:{
        //             orderDetails:{$eq:[]}
        //         }
        //     },
        //     {
        //         $project:{
        //             _id:0,
        //             name:0
        //         }
        //     }
        // ]).toArray()
        // console.log(result)

   // quetion 18
        
        // const result = await paymentCollection.aggregate([
           
        //     {$match:{payment_method:"UPI"}},
        //     {$count:"Total_UPI_Payment"}
        // ]).toArray()
        // console.log(result)

        // quetion-19
         
        // const result = await orderCollection.aggregate([
           
        //     {$lookup:{
        //         from:"product",
        //         localField:"product_id",
        //         ForeignFiel:"_id",
        //         as:"productDetils"
        //     }},
        //     {$unwind:"$productDetails"},{$group:{_id:"$productDetails.category",totalRevenue:{$sum:{$mul:["$quantity","$productDetails.price"]}}}}
        // ]).toArray();
        // console.log(result);

// quetiom 20
//  const result = await paymentCollection .aggregate([
//     {$match:{status:"success"}}
//  ]).toArray();
//  console.log(result);
   

   // quetion 21
    
//    const result = await usersCollection.aggregate([
//     {
//       $lookup: {
//         from: "order",   
//         localField: "_id", 
//         foreignField: "user_id", 
//         as: "order" 
//       }
//     }
//     // {
//     //     $unwind:{

//     //     }
//     // }
//   ]).toArray();
  
//   console.log(result);
  
      



// quetion 22

    // const result = await usersCollection.aggregate([
    //     {
    //       $lookup:{
    //         from:"order",
    //         localField:"user_id",
    //         foreignField:"_id",
    //         as:"order"
    //       }
    //      }//,{
    //     //     $unwind:"$order"
    //     // },
       
    //   ]).toArray(); 
      
    //   console.log(result);

    //quetion 23
      
    // const result = await productCollection.aggregate([
    //     {
    //       $lookup:{
    //         from:"review",
    //         localField:"_id",
    //         foreignField:"product_id",
    //         as:"productreviw"
    //       }
    //      },{
    //          $unwind:"$productreviw"
    //     },
       
    //   ]).toArray(); 
      
    //   console.log(result);


    //quetion 24
    // const result = await productCollection.aggregate([
    //     {
    //       $sort:{rating:-1
          
    //       }},{$limit:1}
       
    //   ]).toArray(); 
      
    //   console.log(result);

    //quetion 25
    // const result = await orderCollection.aggregate([
    //   {$group:{_id:"$product_id",ordercount:{$sum:1}}},
    //   {$sort:{ordercount:-1}},
    //   {$limit:1}
       
    //   ]).toArray(); 
      
    //   console.log(result);
      

    // quetion 26
    // const result = await paymentCollection.aggregate([
    // {$lookup:{
    //     from:"order",
    //     localField:"order_id",
    //     foreignField:"_id",
    //     as:"orderDetails"
    // }},{$unwind:"$orderDetails"},
    // {$group:{_id:"orderdDetils.user_id",taotalpayment:{$sum:"$amount"}}}
       
    //   ]).toArray(); 
      
    //   console.log(result);

    //quetion 27
    // const result = await paymentCollection.aggregate([
    // {$lookup:{
    //     from:"order",
    //     localField:"order_id",
    //     foreignField:"_id",
    //     as:"orderDetails"
    // }},{$unwind:"$orderDetails"},
    // {$match:{payment_method:"credit card"}}
       
    //   ]).toArray(); 
      
    //   console.log(result);

    //quetion28
    // const result = await reviewCollection.aggregate([
    // {$match:{rating:{$lt:4}}}
       
    //   ]).toArray(); 
      
    //   console.log(result);

    //quetion 29
      
    // const result = await orderCollection.aggregate([
    // {
    //     $lookup:{
    //         from:"product",
    //         localField:"product_id",
    //         foreignField:"_id",
    //         as:"productDetails"
    //     }
    // },{$unwind:"$productDetails"},
    // {$group:{_id:"$productDetails.category",count:{$sum:1}}},
    // {$sort:{count:-1}},
    // {$limit:1}
       
    //   ]).toArray(); 
      
    //   console.log(result);
      
    // quetion 30
    // const result = await orderCollection.aggregate([
    
    //     {$group:{_id:"$u",totalProduct:{$sum:"$quantity"}}}
    //   ]).toArray(); 
      
    //   console.log(result);

// quetion 31
    
//    const result = await orderCollection.aggregate([
//     {
//         $lookup:{
//             from:"product",
//             localField:"product_id",
//             foreignField:"_id",
//             as:"productDetails"
//         }
//     },{$unwind:"$productDetails"},
//     {$group:{_id:"$productDetails.category",count:{$sum:"$quantity"}}},
  
       
//       ]).toArray(); 
      
//       console.log(result);

//quetion 32
//   const result = await productCollection.aggregate([
    
//     {$group:{_id:null,"averageRating":{$avg:"$rating"}}}
//       ]).toArray(); 
      
//       console.log(result);

//quetion 33

// const result = await orderCollection.aggregate([
//     {
//         $lookup: {
//             from: "product",
//             localField: "product_id",
//             foreignField: "_id",
//             as: "productDetails"
//         }
//     },
//     { $unwind: "$productDetails" },
//     {
//         $group: {
//             _id: "$user._id",
//             totalsum: {
//                 $sum: {
//                     $multiply: [
//                         { $toInt: "$quantity" },  
//                         { $toDouble: "$productDetails.price" } 
//                     ]
//                 }
//             }
//         }
//     }
// ]).toArray();

// console.log(result);


//quetion 34

// const result = await orderCollection.aggregate([
//     {
//        $lookup: {
//           from: "users",
//           localField: "user_id",
//           foreignField: "_id",
//           as: "userDetails"
//        }
//     },
//     { $unwind: "$userDetails" }, 
//     {
//        $lookup: {
//           from: "product",
//           localField: "product_id", 
//           foreignField: "_id",
//           as: "productDetails"
//        }
//     },
//     { $unwind: "$productDetails" }, 
//  ]).toArray();
 
//  console.log(result);

//quetion 35

//   const result = await orderCollection.aggregate([
    
//     {$lookup:{
//         from: "payment",
//         localField: "products_id", 
//         foreignField: "_id",
//         as: "productsDetails"

//     }

//     },
//    {
//     $unwind:{$productDetails}
//    },{$group:{_id:"user_id"}}
//       ]).toArray(); 
      
//       console.log(result);

//quetion-36
  const result = await orderCollection.aggregate([
    
    {$group:{
        _id:"$_id",
        count:{$sum:1}
    }},
    {$sort:{count:-1}}
      ]).toArray(); 
      
      console.log(result);
 

  // when we have to return a specified number of docuement at that time we have to use limit.
        // const result= await usersCollection.aggregate([
        //     {$limit:2}
        // ]).toArray();
        // console.log(result);
  // when we have to skip some document from starting or end at that time we have to use skip
        // const result= await usersCollection.aggregate([
        //     {$skip:2},
        //     {$limit:3}
            
        // ]).toArray();
        // console.log(result);

        // const result= await usersCollection.aggregate([
        //     {$match:{age:{$gt:30}}},
        //     {$out:"budhu_log"}
            
        // ]).toArray();
        // console.log(result);
        // out methid when we have to basically store our aggregation result in new collection at that time we have to use out method
     // addField method it is used when 
        // const result= await usersCollection.aggregate([
        //     {$addFields:{
        //         isAdult:{$gte:["$age",30]}
        //     }},
            
            
        // ]).toArray();
        // console.log(result);

        //facet method => when we have
        // const result= await usersCollection.aggregate([
        //     {$facet:{
        //         "jawanstudent":[{$match:{age:{$lt:25}}}],
        //         "budhestudent":[{$match:{age:{$gt:30}}}]
        //     }}
            
            
        // ]).toArray();
        // console.log(result);  =======>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        // bucket methid == when we have  to divide student on the basis of any particular range at that time we will use bucket method
         
        // const result= await usersCollection.aggregate([
        //     {$bucket:{
        //         groupBy:"$age",
        //         boundaries:[10,20,30,40,50,60],
        //         default:"other",
        //         output:{count:{$sum:1}}
        //     }}
            
            
        // ]).toArray();
        // console.log(result);

// bucket auto metho= bucket khud bna lega yeh

        // const result= await usersCollection.aggregate([
        //     {$bucketAuto:{
        //         groupBy:"$age",
        //         buckets:3
                
        //     }}
            
            
        // ]).toArray();
        // console.log(result);

        // to uppercase to lowercase method

        // const result= await usersCollection.aggregate([
        //     {$project:{
        //         nameUpper:{$toUpper:"$name"}
        //     }}
            
            
        // ]).toArray();
        // console.log(result);


        // await usersCollection.insertMany([
        //         { _id: 1, name: "Amit", age: 25, city: "Delhi", email: "amit@gmail.com", 
        //         created_at: "2024-01-10T10:00:00Z" }, 
        //         { _id: 2, name: "Suman", age: 30, city: "Mumbai", email: "suman@yahoo.com", 
        //         created_at: "2023-12-15T12:30:00Z" }, 
        //         { _id: 3, name: "Ravi", age: 22, city: "Bangalore", email: "ravi@gmail.com", 
        //         created_at: "2024-02-20T08:45:00Z" }, 
        //         { _id: 4, name: "Priya", age: 27, city: "Kolkata", email: "priya@hotmail.com", 
        //         created_at: "2024-03-01T15:20:00Z" }, 
        //         { _id: 5, name: "Vikram", age: 35, city: "Pune", email: "vikram@gmail.com", 
        //         created_at: "2023-11-05T18:10:00Z" }, 
        //         { _id: 6, name: "Neha", age: 29, city: "Chennai", email: "neha@gmail.com", 
        //         created_at: "2024-02-28T09:15:00Z" }, 
        //         { _id: 7, name: "Rahul", age: 32, city: "Hyderabad", email: "rahul@gmail.com", 
        //         created_at: "2024-01-25T14:05:00Z" } 
                
        // ]);

        //  await reviewCollection.insertMany([
        //     { _id: 401, user_id: 1, product_id: 101, rating: 5, comment: "Excellent laptop!" },
        //     { _id: 402, user_id: 2, product_id: 102, rating: 4, comment: "Good phone, but battery could be better." },
        //     { _id: 403, user_id: 3, product_id: 103, rating: 3, comment: "Average quality shoes." },
        //     { _id: 404, user_id: 4, product_id: 104, rating: 4, comment: "Nice watch, looks premium." },
        //     { _id: 405, user_id: 5, product_id: 105, rating: 5, comment: "Amazing TV, great display!"}
        //   ]);

        //   await paymentCollection.insertMany([
        //     { _id: 301, order_id: 201, amount: 50000, payment_method: "Credit Card", payment_date: "2024-03-02T12:30:00Z", status: "Success" },
        //     { _id: 302, order_id: 202, amount: 40000, payment_method: "UPI", payment_date: "2024-03-05T16:00:00Z", status: "Pending" },
        //     { _id: 303, order_id: 203, amount: 9000, payment_method: "Debit Card", payment_date: "2024-03-10T09:45:00Z", status:"Failed"}
        //   ]);

        //   await orderCollection.insertMany([
        //     { _id: 201, user_id: 1, product_id: 101, quantity: 1, order_date: "2024-03-02T12:00:00Z", status: "Delivered" },
        //     { _id: 202, user_id: 2, product_id: 102, quantity: 2, order_date: "2024-03-05T15:45:00Z", status: "Shipped" },
        //     { _id: 203, user_id: 3, product_id: 103, quantity: 3, order_date: "2024-03-10T09:30:00Z", status: "Pending" },
        //     { _id: 204, user_id: 4, product_id: 104, quantity: 1, order_date: "2024-03-12T11:15:00Z", status: "Delivered" },
        //     { _id: 205, user_id: 5, product_id: 105, quantity: 1, order_date: "2024-03-14T08:50:00Z", status: "Cancelled"}
        //   ]);

        //   await productCollection.insertMany([
        //     { _id: 101, name: "Laptop", category: "Electronics", price: 50000, stock: 10, rating: 4.5 },
        //     { _id: 102, name: "Mobile", category: "Electronics", price: 20000, stock: 15, rating: 4.2 },
        //     { _id: 103, name: "Shoes", category: "Fashion", price: 3000, stock: 50, rating: 4.0 },
        //     { _id: 104, name: "Watch", category: "Fashion", price: 7000, stock: 30, rating: 4.3 },
        //     { _id: 105, name: "TV", category: "Electronics", price: 40000, stock: 5, rating: 4.6 },
        //     { _id: 106, name: "Headphones", category: "Electronics", price: 2500, stock: 25, rating: 4.1 },
        //     { _id: 107, name: "Jeans", category: "Fashion", price: 1500, stock: 60, rating: 4.0 },
        //     { _id: 108, name: "T-Shirt", category: "Fashion", price: 1200, stock: 70, rating: 3.9 },
        //     { _id: 109, name: "Refrigerator", category: "Appliances", price: 30000, stock: 8, rating: 4.7 },
        //     { _id: 110, name: "Microwave", category: "Appliances", price: 10000, stock: 12, rating:4.4}
        //   ]);

        // console.log("data has been successuffuly inserted in collection")
        }
        catch(error){
            console.log(error);
        }
        finally{
            await client.close();
        }
    }
    
    main().catch(console.error);