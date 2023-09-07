import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: String,
    category: {
      type: String,
      required: true,
    },
    subcategory: String,
    quantity: {
      type: Number,
      required: true,
    },
    images: [String],
    location: String,
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
