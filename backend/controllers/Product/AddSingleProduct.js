import createError from 'http-errors';
import { HTTPStatusCodes } from '../../utils/constants.js';
import Product from "../../models/Product/Product.js";

export const addSingleProduct = async (req, res, next) => {
    const {
        name,
        brand,
        description,
        category,
        subcategory,
        quantity,
        price,
        model,
        upc,
    } = req.body;

    try {
        const newProduct = new Product({
            name,
            brand,
            description,
            category,
            subcategory,
            quantity,
            price,
            model,
            upc,
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
