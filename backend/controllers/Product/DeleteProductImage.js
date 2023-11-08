import fs from "fs";
import path from "path";
import { promisify } from "util"
import Product from "../../models/Product/Product.js";


export const deleteProductImage = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id);
        const unlinkAsync = promisify(fs.unlink)
        if(!product){
            return res.status(404).json({message: 'product not found'})
        } 
        const {images} = product
        const imagePath = images.slice(21)
        // delete image
        fs.unlink('static/images/product.png', (err) => {
            if(err) console.log(err)
            return
        })

        res.status(200).json({message: "image delete success"});
    
    } catch (error) {
        res.status(500).json({ message: error  });
    }
};
