import User from '../../models/User/User.js';
import createError from 'http-errors';
import { HTTPStatusCodes } from '../../utils/constants.js';

export const  placeOrder = async (req, res, next) => {
    try {
        console.log("request body: ", req.body)

        const id = req.body.user.id
        const cart = req.body.cart

        const userExists = await User.findById(id)
        console.log("userExists: ", userExists)

        if(!userExists){
            res.status(404).json({ message: "User Not Found" })
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $push: { orders: cart } },
            { new: true, useFindAndModify: false }
        )

        console.log("updatedUser: ", updatedUser)
        res.status(200).json({message: "Order placed successful", updatedUser})

    } catch(error){
        console.log(error);
        next(createError(HTTPStatusCodes.InternalServerError, error.message));
    }
}