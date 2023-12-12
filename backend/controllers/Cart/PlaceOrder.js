import createError from 'http-errors';
import { HTTPStatusCodes } from '../../utils/constants.js';

export const placeOrder = async (req, res, next) => {
    try {
        console.log(req.body.products)
        res.status(200).json({message: "Order placed successful"})
    } catch(error){
        console.log(error);
        next(createError(HTTPStatusCodes.InternalServerError, error.message));
    }
}