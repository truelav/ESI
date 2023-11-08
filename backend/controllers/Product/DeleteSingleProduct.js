import fs from "fs";
import { promisify } from "util"
import Product from "../../models/Product/Product.js";
import { deleteProductImage } from "../../services/products_service.js";

const unlinkAsync = promisify(fs.unlink)

export const deleteSingleProduct = async (req, res) => {
  try {
    const id = req.params.id
    const product = await Product.findById(id);

    if(!product){
      return res.status(404).json({message: 'product not found'})
    } 

    // delete image
    const {images} = product
    const imagePath = images.slice(22)
    fs.unlink(imagePath, (err) => {
      if(err) console.log(err)
      return
    })
    // fs.unlink(product.images, (err) => {
    //   if (err) {
    //     return err;
    //   }
  
    //   return true
    // });

    const deletedProduct = await Product.findByIdAndDelete(id);
    

    res.status(200).json({message: "product delete success"});
    
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
