import User from "../../models/User/User.js"
import Order from "../../models/Order/Order.js"

export const saveOrderToUser = async (data) => {
    try {
        console.log("request body: ", data)

        const id = data.user.id
        const cart = data.cart

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
        return updatedUser

    } catch (error){
        console.log(error)
        return error
    }
}

export const saveOrderToOrders = async (data) => {
    try {
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

    } catch(error){
        console.log(error)
        return error
    }
}
