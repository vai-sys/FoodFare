// const mongoose=require('mongoose');
// const {Schema}=mongoose;

// const categorySchema=new Schema({
//     name:String,
//     menuId:Number
// })

// const category=mongoose.model('category',categorySchema);
// module.exports=category;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: { type: String, required: true },
    menuId: { type: Number, required: true }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
