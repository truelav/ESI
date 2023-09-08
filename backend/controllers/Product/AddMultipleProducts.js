import Product from "../../models/Product/Product.js";

export const addMultipleProducts = async (req, res) => {
    try {
        res.status(200).json('success');
        
      } catch (error) {
        res.status(500).json({ message: error });
      }
}
