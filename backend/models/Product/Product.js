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
    },
    images: {
      type: String,
      default:
        "https://us.vaio.com/cdn/shop/files/VAIO-16-F-Series-Notebook-FHD-Intel-Core-i7-1355U-10-Core-16GB-RAM-1TB-SSD-Fingerprint-Scanner-THX-Spatial-Audio-HD-Camera-HDMI-Windows-11-Home-Silve_3cc1cf37-1f2d-4501-9585-6ef60466a.webp?v=1696054599",
    },
    upc: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
