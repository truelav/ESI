import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
    },
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
      default: "electronics",
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
      default: 0,
    },
    images: {
      type: String,
      default:
        "https://unsplash.com/photos/black-cordless-headphones-beside-closed-black-laptop-computer-and-smartphone-_aXa21cf7rY",
    },
    upc: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
