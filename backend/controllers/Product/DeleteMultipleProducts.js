import { HTTPStatusCodes } from '../../utils/constants.js';
import createError from 'http-errors';
import Product from "../../models/Product/Product.js";

export const deleteMultipleProducts = async (req, res) => {
  try {
    const idsToDelete = req.body.products || []

    if(idsToDelete.length === 0) {
      return next(createError(HTTPStatusCodes.InternalServerError, "there are no products selected to delete"));
    }

    const deletedProducts = []
    const findAndDeleteProducts = async(id) => {
      let product = await Product.findById(id);

      if(!product){
        return next(createError(HTTPStatusCodes.InternalServerError, "Product selected to delete not found"));
      } 
      // delete image
      const { images } = product
      // fallback image
      const fallback_image = "http://localhost:8888/static/images/fallback_image.jpeg"
      
      if (images && images !== fallback_image){
        const imagePath = images.slice(22)
        // await unlinkAsync(imagePath)
        fs.unlink(imagePath, (err) => {
          if(err){
            console.log(err)
            return 
          } 
        })
      }
  
      const deletedProduct = await Product.findByIdAndDelete(id);
    }

    idsToDelete.forEach((id) => {
      findAndDeleteProducts(id)
    })

    res.status(200).json({message: "product delete success", deletedProducts: deletedProducts});
    
  } catch (error) {
    console.log(error)
    next(createError(HTTPStatusCodes.InternalServerError, error.message));
  }
};
