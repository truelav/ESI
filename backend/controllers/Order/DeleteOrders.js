export const deleteOrders = async (req, res, next) => {
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
  