import fs from "fs";
import { promisify } from "util"
import Product from "../../models/Product/Product.js";
// import { deleteProductImage } from "../../services/products_service.js";

// const unlinkAsync = promisify(fs.unlink)

export const deleteSingleProduct = async (req, res) => {
  try {
    const id = req.params.id
    const product = await Product.findById(id);

    if(!product){
      return res.status(404).json({message: 'product not found'})
    } 

    // delete image
    const { images } = product
    // fallback image
    const fallback_image = "http://localhost:8888/static/images/fallback_image.jpeg"
    
    if (images && images !== fallback_image){
      const imagePath = images.slice(22)
      // await unlinkAsync(imagePath)
      fs.unlink(imagePath, (err) => {
        if(err) console.log(err)
        return
      })
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    res.status(200).json({message: "product delete success", deletedProduct: deletedProduct});
    
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
