import User from "../../models/User/User.js"
import Order from "../../models/Order/Order.js"


export const getAllOrdersService = async () => {
    const orders = await Order.find({});

    if(!orders){
        return []
    }

    return orders
}

export const saveOrderToUserService = async (data) => {
    const id = data.user.id
    const cart = data.cart

    const userExists = await User.findById(id)

    if(!userExists){
        return null
    }

    const updatedUser = await User.findByIdAndUpdate(
        id,
        { $push: { orders: cart } },
        { new: true, useFindAndModify: false }
    )

    return updatedUser
}

export const saveOrderToOrdersService = async (data) => {
    if(!data.user){
        return null
    }

    const userId = data.user.id
    const userEmail = data.user.email

    if(!userId || !userEmail){
        return null
    }
        
    const user = {userId, userEmail}
    
    const orderSummary = {
        totalAmount: data.cart.totalAmount,
        totalProducts: data.cart.products.length
    }

    const products = data.cart.products
    const newOrder = new Order({ user, orderSummary, products })
    
    await newOrder.save()
    
    return newOrder
}

export const deleteOrdersService = async (data) => {
    const idsToDelete = data
    const deletedOrders = []
  
    idsToDelete.forEach(async (id) => {
        const order = await Order.findById(id)
    
        if(!order){
            return null
        }
    
        const deletedOrder = await Order.findByIdAndDelete(id)
        deletedOrders.push(deletedOrder)
    })

    return deletedOrders
}
