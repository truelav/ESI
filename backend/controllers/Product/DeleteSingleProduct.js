import Product from "../../models/Product/Product.js";

export const deleteSingleProduct = async (req, res) => {
    const postId = req.params.id
  try {

    const product = await Product.findByIdAndDelete(postId);
    
    if(!product){
      return res.status(404).json({message: 'product not found'})
    } 
    res.status(200).json(product);
    
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
