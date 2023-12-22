const express = require('express');
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
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();


    // -------------------connect mogodb---------------------------------------------
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('tech is sitting on')
  })
  
  app.listen(port, () => {
    console.log(`tech is sitting on port ${port}`);
  })
