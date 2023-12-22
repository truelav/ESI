import createError from 'http-errors';
import { HTTPStatusCodes } from '../../utils/constants.js';
import Product from "../../models/Product/Product.js";

export const addSingleProduct = async (req, res, next) => {
    const {
        brand,
        model,
        description,
        category,
        subcategory,
        upc,
        price,
        quantity,
    } = req.body;

    try {
        
        let images = "http://localhost:8888/static/images/"
        if(!req.file || !req.file.filename){
            images += "fallback_image.jpeg"
        } else {
            images += req.file?.filename
        }

        const newProduct = new Product({
            brand,
            model,
            description,
            category,
            subcategory,
            upc,
            price,
            quantity,
            images,
        });

        await newProduct.save();

        res.status(200).json({
            message: `The new product ${newProduct.name} was added `,
            newProduct,
        });
    } catch (error) {
        console.log(error);
        next(createError(HTTPStatusCodes.InternalServerError, error.message));
    }
};
