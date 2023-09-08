import Product from "../../models/Product/Product.js";

export const createProduct = async (req, res) => {
  const {
    name,
    brand,
    description,
    category,
    subcategory,
    quantity,
    images,
    location,
  } = req.body;

  try {
    const newProduct = new Product({
      name,
      brand,
      description,
      category,
      subcategory,
      quantity,
      images,
      location,
    });

    await newProduct.save();

    res
      .status(200)
      .json({ message: `The new product ${newProduct.name} with added ` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});

    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// name: {
//   type: String,
//   required: true,
// },
// brand: {
//   type: String,
//   required: true,
// },
// description: String,
// category: {
//   type: String,
//   required: true,
// },
// subcategory: String,
// quantity: {
//   type: Number,
//   required: true,
// },
// images: [String],
// location: String,
