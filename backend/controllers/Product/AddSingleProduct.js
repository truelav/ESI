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
        const newProduct = new Product({
            brand,
            model,
            description,
            category,
            subcategory,
            upc,
            price,
            quantity,
            images: "http://localhost:8888/static/images/" + req.file?.filename || 'fallback_image.jpeg',
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
