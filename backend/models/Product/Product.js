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
      type: String
    },
    description: String,
    category: {
      type: String,
    },
    subcategory: String,
    quantity: {
      type: Number,
    },
    price: Number,
    images: [String],
    location: String,
    upc: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
