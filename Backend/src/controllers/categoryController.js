const category=require("../model/categoryModel");
const Item=require("../model/itemModel");

const getCategory=async(req,res)=>{
    const {category}=req.params;
    try{
   const categorydata=await category.findOne({name:category});

     if(!categorydata){
        return res.status(404).json({message:"category Not Found"})
     }
     const items=Item.find({menuId:categorydata.menuId});
     res.status(200).json(items)
    }catch(err){
        res.status(500).json({message:"No Category Specified"})
    }
}
module.exports={
    getCategory
}