import createError from 'http-errors';
import { HTTPStatusCodes } from "../../utils/constants.js";
import { saveOrderToOrdersService, saveOrderToUserService } from '../../services/orders/order_services.js';

export const createOrder = async (req, res, next) => {
    try {
        const data = req.body
    
        const newOrder = saveOrderToOrdersService(req.body)
        const updatedUser = saveOrderToUserService(req.body)
    
        res.status(200).json({
            message: `The Order was place with success`,
            newOrder,
            updatedUser
        });
  
    } catch(error){
        next(createError(HTTPStatusCodes.InternalServerError, error.message))
    }
}