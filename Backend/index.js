

// const express = require("express");
// const app = express();
// const mongoose = require('mongoose');
// const cors = require('cors');

// const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors());

// async function main() {
 
//   const connectionString = 'mongodb://localhost:27017';
//   const dbName = 'vegify-recipe-app';

//   await mongoose.connect(connectionString, {
//     dbName,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });

//   app.get("/", (req, res) => {
//     res.send("FoodFare Server");
//   });
// }

// main().then(() => {
//   console.log("MongoDB connected Successfully!");
// }).catch(err => console.log(err));

// const ItemRoutes = require("./src/routes/itemRoute");
// app.use('/api', ItemRoutes);

// const categoryRoutes=require("./src/routes/categoryRoutes")
// app.use('/api/',categoryRoutes)
// app.listen(port, () => {
//   console.log(`Server is running on ${port}`);
// });


const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

async function main() {
  // Use environment variable for MongoDB connection string
  const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017';
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
    process.exit(1); // Exit process with failure
  }
}

main();

// Routes
const ItemRoutes = require("./src/routes/itemRoute");
app.use('/api', ItemRoutes);

const categoryRoutes = require("./src/routes/categoryRoutes");
app.use('/api/', categoryRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
