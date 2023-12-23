const express = require ('express');
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
// const axios = require('axios');
const app = express();
const cors = require('cors');

//  require('dotenv').config();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// require('crypto').randomBytes(64).toString('hex')
const port = process.env.PORT || 5000;

// ---------------middleware--------------
app.use(cors());
app.use(express.json());








const uri = "mongodb+srv://task:yd6llOUC9vhRDHGQ@taskmanage.cx6sida.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
     // ------------connect database and access----------
const taskcollection=client.db('taskDb').collection('task');

// -----------post tasks------------------------
app.post('/task',async(req,res)=>{
  const newtask=req.body;
  console.log(newtask)
  const result=await taskcollection.insertOne(newtask);
  res.send(result);
})

// -----------get mathod-----------
app.get('/task',async(req,res)=>{
  const result=await taskcollection.find().toArray();
  res.send(result);
})

    // -------------------connect mogodb---------------------------------------------
   
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('task is sitting on')
  })
  
  app.listen(port, () => {
    console.log(` task manage  is sitting on port ${port}`);
  })
