import createError from 'http-errors';
import User from "../../models/User/User.js";
import Order from '../../models/Order/Order.js';
import { HTTPStatusCodes } from "../../utils/constants.js";
import * as OrderServices from "../../services/orders/order_services.js"

export const getAllOrders = async (req, res, next) => {
    try {
      const orders = await Order.find({});
  
      if (!orders) {
        res.status(400).json({ message: "no users found", orders: [] });
      }
  
      return res.status(200).json(orders);
    } catch (error) {
      next(createError(HTTPStatusCodes.InternalServerError, error.message));
    }
};

export const placeOrder = async (req, res, next) => {
  try {
    const data = req.body

    if(!data.user || !data.cart){
      return res.status(500).json({ message: "The was an error with placing your order, please try again later" })
    }

    const newOrder = OrderServices.saveOrderToOrders(data)
    const updatedUser = OrderServices.saveOrderToUser(data)

    res.status(200).json({
      message: `The Order was place with success`,
      newOrder,
    });

  } catch(error){
    next(createError(HTTPStatusCodes.InternalServerError, error.message))
  }
}
  
export const deleteOrder = async (req, res, next) => {
  try {
    const idsToDelete = req.body

    const deletedOrders = []

    idsToDelete.forEach((orderId) => {
      const deletedOrder = OrderServices.deleteOrder(orderId)
      deletedOrders.push(deletedOrder)
    })

    res.status(200).json({ message: "Orders deleted success", deletedOrders })
  } catch(error){
    next(createError(HTTPStatusCodes.InternalServerError, error.message))
  }
}