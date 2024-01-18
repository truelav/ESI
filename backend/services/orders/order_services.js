import User from "../../models/User/User.js"
import Order from "../../models/Order/Order.js"

export const saveOrderToUser = async (data) => {
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

export const saveOrderToOrders = async (data) => {
    const userId = data.user.id
    const userEmail = data.user.email
        
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

export const getAllOrders = async () => {
    const orders = await Order.find({});

    if(!orders){
        return null
    }

    return orders
}

export const deleteOrder = async (data) => {
    const id = data

    if(!id){
        return null
    }

    const order = await Order.findById(id)
    
    if(!order){
        return null
    }

    const deletedOrder = await Order.findByIdAndDelete(id)

    if(deletedOrder){
        return deletedOrder
    } else {
        return null
    }
}
