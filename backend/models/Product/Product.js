import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema(
    {
        brand: {
            type: String,
        },
        model: {
            type: String,
        },
        description: {
            type: String,
        },
        category: {
            type: String,
        },
        subcategory: {
            type: String,
        },
        quantity: {
            type: Number,
        },
        price: {
            type: Number,
        },
        images: {
            type: String,
            default: "/fallback_image.jpeg",
        },
        upc: {
            type: String,
            default: "000000000000"
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
