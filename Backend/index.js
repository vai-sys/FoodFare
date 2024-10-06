


const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

async function main() {
 
  const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
  const dbName = 'vegify-recipe-app';

  try {
    await mongoose.connect(connectionString, {
      dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected Successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); 
  }
}

main();


const ItemRoutes = require("./src/routes/itemRoute");
app.use('/api', ItemRoutes);

const categoryRoutes = require("./src/routes/categoryRoutes");
app.use('/api', categoryRoutes);

const userRoutes=require("./src/routes/userRoute");
app.use('/user',userRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
