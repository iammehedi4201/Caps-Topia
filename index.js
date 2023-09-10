const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());

//Caps Data
const caps = require("./Data/Caps.json");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k1h4rxx.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const capsCollection = client.db("Caps-Topia").collection("Caps");
    const bookingCollection = client.db("Caps-Topia").collection("Bookings");

    // --------------------Apis----------------------

    //get the total product count
    app.get("/totalProducts", async (req, res) => {
      const result = await capsCollection.estimatedDocumentCount();
      res.send({ totalProducts: result }); //i make the result into object beacuse the server only take object file ;
    });

    //read data
    app.get("/caps", async (req, res) => {
      const currentPage = parseInt(req.query.currentPage);
      const pageSize = parseInt(req.query.pageSize);
      const caps = await capsCollection
        .find()
        .skip(currentPage * pageSize)
        .limit(pageSize)
        .toArray();
      res.send(caps);
    });

    //read individual data
    app.get("/caps/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const cap = await capsCollection.findOne(query);
      res.send(cap);
    });

    //Insert Boooking info
    app.post("/bookings", async (req, res) => {
      const bookingInfo = req.body;
      const result = await bookingCollection.insertOne(bookingInfo);
      res.send(result);
    });

    //Read some booking
    app.get("/bookings", async (req, res) => {
      let query = {};
      if (req.query.email) {
        query = { email: req.query.email };
      }
      const bookings = await bookingCollection.find(query).toArray();
      res.send(bookings);
    });

    //Delete Booking
    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    });

    //Update Payment Status
    app.patch("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const updatedInfo = req.body;
      console.log(req.body.status);
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: updatedInfo.status,
        },
      };
      const result = await bookingCollection.updateOne(query, updateDoc);
      res.send(result);
    });

    //read catagorey data
    app.get("/catagories", async (req, res) => {
      const currentPage = parseInt(req.query.currentPage);
      const pageSize = parseInt(req.query.pageSize);
      let query = {};
      if (req.query.cat) {
        query = { category: req.query.cat };
      }
      const products = await capsCollection
        .find(query)
        .skip(currentPage * pageSize)
        .limit(pageSize)
        .toArray();
      res.send(products);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);

//Search Data
app.get("/capData/search", (req, res) => {
  const searchQuery = req.query.q.toLowerCase();
  // console.log(searchQuery);
  //Implement search logic
  if (searchQuery) {
    const searchResults = caps.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    res.send(searchResults);
  } else {
    res.send([]);
  }
});

//sorted Data
// app.get("/sort/data", (req, res) => {
//   const sortedFieldData = req.query.q;
//   if (sortedFieldData === "Price: Low to High") {
//     const sortedProducts = caps.sort((a, b) => a.price - b.price);
//     res.send(sortedProducts);
//   } else if (sortedFieldData === "Price: High to Low") {
//     const sortedProducts = caps.sort((a, b) => b.price - a.price);
//     res.send(sortedProducts);
//   } else if (sortedFieldData === "Best Rating") {
//     const sortedProducts = caps.sort((a, b) => b.ratings - a.ratings);
//     res.send(sortedProducts);
//   }
// });

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
