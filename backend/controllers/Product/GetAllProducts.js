import Product from "../../models/Product/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});

    if(!allProducts){
      res.status(400).json({message: "no products found", allProducts: []})
    }

    res.status(200).json(allProducts);
    
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
