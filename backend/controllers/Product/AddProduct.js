import Product from "../../models/Product/Product.js";

export const addProduct = async (req, res) => {
  
    const {
      name,
      brand,
      description,
      category,
      subcategory,
      quantity,
      images,
      location,
    } = req.body;
  
    try {
      const newProduct = new Product({
        name,
        brand,
        description,
        category,
        subcategory,
        quantity,
        images,
        location,
      });
  
      await newProduct.save();
  
      res
        .status(200)
        .json({ message: `The new product ${newProduct.name} with added ` });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  };