import User from "../../models/User/User.js"
import Order from "../../models/Order/Order.js"


export const getAllOrdersService = async () => {
    const orders = await Order.find({});

    if(!orders){
        return []
    }

    return orders
}

export const saveOrderService = async (data) => {
    const { cart } = data
    const userId = data.user.id
    const userEmail = data.user.email

    const userExists = await User.findById(userId)

    if(!userExists){
        return null
    }
    
    const user = { userId, userEmail }
    const orderSummary = {
        totalAmount: cart.length,
        totalProducts: cart.length
    }

    const products = cart
    const newOrder = new Order({ user, orderSummary, products })
    const updatedOrder = await newOrder.save()

    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $push: { orders: newOrder } }
    )

    return { updatedUser, updatedOrder }
}

// export const saveOrderToOrdersService = async (data) => {
//     if(!data.user){
//         return null
//     }

//     const userId = data.user.id
//     const userEmail = data.user.email

//     if(!userId || !userEmail){
//         return null
//     }
        
//     const user = { userId, userEmail }
    
//     const orderSummary = {
//         totalAmount: data.cart.length,
//         totalProducts: data.cart.length
//     }

//     const products = data.cart.products
//     const newOrder = new Order({ user, orderSummary, products })
    
//     await newOrder.save()
    
//     return newOrder
// }

export const deleteOrdersFromUserService = async (data) => {
    const id = data.user.id

    const userExists = await User.findById(id)

    if(!userExists){
        return null
    }
    
    const updatedUser = await User.findByIdAndUpdate( id, { $set: { orders: [] } })

    return updatedUser
}

export const deleteOrdersService = async (data) => {
    // const idsToDelete = data
    // const deletedOrders = []
  
    // idsToDelete.forEach(async (id) => {
    //     const order = await Order.findById(id)
    
    //     if(!order){
    //         return null
    //     }
    
    //     const deletedOrder = await Order.findByIdAndDelete(id)
    //     deletedOrders.push(deletedOrder)
    // })

    // return deletedOrders
    await Order.deleteMany({})
    return
}
