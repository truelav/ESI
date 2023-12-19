import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    orderSummary: {
        totalAmount: {
            type: Number,
            required: true,
        },
        totalProducts: {
            type: Number,
            required: true,
        },
    },
    products: [
        {
            product: Object,
            cartQuantity: {
                type: Number,
                required: true,
            },
        },
    ]}, 
    { timestamps: true }
)

export default mongoose.model("Order", OrderSchema);