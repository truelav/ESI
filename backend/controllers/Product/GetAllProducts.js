import Product from "../../models/Product/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});

    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
