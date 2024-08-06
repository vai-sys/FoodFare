const Category = require("../model/categoryModel");
const Item = require("../model/itemModel");




const getCategory = async (req, res) => {
    const { category } = req.params;
    console.log(`Fetching category: ${category}`);
    
    try {
       
        const categoryData = await Category.findOne({ 
            name: { $regex: new RegExp(`^${category}$`, 'i') }
        });
        console.log('Category data:', categoryData);
        
        if (!categoryData) {
            console.log(`Category ${category} not found`);
            return res.status(404).json({ message: "Category Not Found" });
        }
        
        console.log(`Finding items with menuId: ${categoryData.menuId}`);
        const items = await Item.find({ menuId: categoryData.menuId });
        console.log("items:", items);
        res.status(200).json(items);
    } catch (err) {
        console.error('Error fetching category:', err.message);
        res.status(500).json({ message: "An error occurred while fetching the category" });
    }
};


 
module.exports = {
    getCategory
};

