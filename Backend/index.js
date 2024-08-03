

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

async function main() {
 
  const connectionString = 'mongodb://localhost:27017';
  const dbName = 'vegify-recipe-app';

  await mongoose.connect(connectionString, {
    dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.get("/", (req, res) => {
    res.send("FoodFare Server");
  });
}

main().then(() => {
  console.log("MongoDB connected Successfully!");
}).catch(err => console.log(err));

const ItemRoutes = require("./src/routes/itemRoute");
app.use('/api', ItemRoutes);

const categoryRoutes=require("./src/routes/categoryRoutes")
app.use('/api/',categoryRoutes)
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
