const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

// Enable CORS for all routes
app.use(cors());

//Caps Data
const caps = require("./Data/Caps.json");

app.get("/caps", (req, res) => {
  res.send(caps);
});

app.get("/capsData/:capId", (req, res) => {
  const ID = parseInt(req.params.capId);
  const cap = caps.find((cap) => cap.capId == ID);
  res.send(cap);
  // console.log("The cap is :-",cap);
});

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

//Catagory Data
app.get("/catagory/data", (req, res) => {
  const catagoryFieldData = req.query.q.toLowerCase();
  //  console.log(catagoryFieldData);
  const catagoryData = caps.filter((product) =>
    product.category.toLowerCase().includes(catagoryFieldData.toLowerCase())
  );
  res.send(catagoryData);
});

//sorted Data 
app.get("/sort/data", (req, res) => {
  const sortedFieldData = req.query.q;
  if (sortedFieldData === "Price: Low to High") {
    const sortedProducts = caps.sort((a, b) => a.price - b.price);
    res.send(sortedProducts);
  } else if (sortedFieldData === "Price: High to Low") {
    const sortedProducts = caps.sort((a, b) => b.price - a.price);
    res.send(sortedProducts)
  } else if (sortedFieldData === "Best Rating") {
    const sortedProducts = caps.sort((a, b) => b.ratings - a.ratings);
    res.send(sortedProducts)
  }
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
