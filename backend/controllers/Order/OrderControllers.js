import createError from 'http-errors';
import User from "../../models/User/User.js";
import { HTTPStatusCodes } from "../../utils/constants.js";

export const getAllOrders = async (req, res, next) => {
    try {
      const users = await User.find({});
  
      if (!users) {
        res.status(400).json({ message: "no users found", users: [] });
      }
  
      return res.json(users);
    } catch (error) {
      next(createError(HTTPStatusCodes.InternalServerError, error.message));
    }
  };
  