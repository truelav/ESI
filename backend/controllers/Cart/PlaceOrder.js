import createError from 'http-errors';
import { HTTPStatusCodes } from '../../utils/constants.js';

export const PlaceOrder = async (req, res) => {
    try {

    } catch(error){
        console.log(error);
        next(createError(HTTPStatusCodes.InternalServerError, error.message));
    }
}