import Product from "../../models/Product/Product.js";

export const getSingleProduct = async (req, res) => {
    
    const id = req.params.id
    console.log(id)

  try {
    const product = await Product.findById(id);

    res.status(200).json(product);
    
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
