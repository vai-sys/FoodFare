const express=require("express");
// vaishnavit582
// Uoh0s8B6YL22rtD3
const app=express();
const mongoose=require('mongoose');
const cors=require('cors')

const port=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// async function main(){
//     await mongoose.connect('mongodb+srv://vaishnavit582:Uoh0s8B6YL22rtD3@vegify-recipe-app.vxmipwz.mongodb.net/vegify-recipe-app?retryWrites=true&w=majority&appName=vegify-recipe-app');

//     app.get("/",(req,res)=>{
//         res.send("Vegify Recipe Server");
//         })
// }

async function main(){
    await mongoose.connect('mongodb://localhost:27017/vegify-recipe-app');

    app.get("/",(req,res)=>{
        res.send("Vegify Recipe Server");
        })
}




main().then(()=>{
    console.log("MongoDB connected Succesfully!")
}).catch(err=>console.log(err));

const ItemRoutes=require("./src/routes/itemRoute")
app.use('/api',ItemRoutes);
app.listen(port,()=>{
    console.log(`server is running on ${port} `);
})



