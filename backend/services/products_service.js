import Product from "../models/Product/Product";

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
