
export const createOrder = async (req, res, next) => {
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
            updatedUser
        });
  
    } catch(error){
        next(createError(HTTPStatusCodes.InternalServerError, error.message))
    }
}