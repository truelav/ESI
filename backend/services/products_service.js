import fs from "fs";
import Product from "../models/Product/Product.js";

export const findProductService = async (data) => {
  const product = await Product.findById(data)
  return product
}

export const editProductService = async (data) => {
  const {
    _id,
    brand,
    model,
    price,
    description,
    category,
    quantity,
    upc,
    features,
    images
  } = data;

  const updatedFeatures = JSON.parse(features)
  data.features = updatedFeatures

  const updatedProduct = await Product.findOneAndUpdate(
    {_id},
    {
      brand,
      model,
      price,
      description,
      category,
      quantity,
      upc,
      features: updatedFeatures,
      images: images,
    },
  )

  return updatedProduct
}

export const findSingleProductById = async (id) => {
  try {

  } catch(error){

  }
}

export const findAllProductsById = async ({ IDs }) => {
  const productDetails = await Product.find({ _id: { $in: prodIDs } });

  if (!productDetails) {
    res
      .status(300)
      .json({ message: "Oooops something went wrong in Database" });
    return;
  }

  return productDetails;
};

export const deleteProductImage = async ({ product }) => {
  // const [] = fileLink.split("-")
  console.log(product);
  const { images } = product;
  return fs.unlink(images, (err) => {
    if (err) {
      return err;
    }

    return true;
  });
};
