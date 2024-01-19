import createError from 'http-errors';
import { HTTPStatusCodes } from "../../utils/constants.js";
import { deleteOrdersService } from '../../services/orders/order_services.js';

export const deleteOrders = async (req, res, next) => {
    try {
        const deletedOrders = deleteOrdersService(req.body)
  
        res.status(200).json({ message: "Orders deleted success", deletedOrders })
    } catch(error){
        next(createError(HTTPStatusCodes.InternalServerError, error.message))
    }
}
  