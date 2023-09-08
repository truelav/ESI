import Product from "../../models/Product/Product.js";

export const editProduct = async (req, res) => {

    const {
        _id,
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

        Product.findOneAndUpdate(
            {_id},
            {
                name,
                brand,
                description,
                category,
                subcategory,
                quantity,
                images,
                location
            },
            (error, data) => {
                if (error) {
                  console.log(error);
                  res.status(300).json({message: error.message})
                } else {
                  console.log(data);
                }
              }
        )

        res.status(200).json({ message: `Product ${name, brand} modified successfully` });

    } catch(error){
        console.log(error);
        res.status(500).json({ message: error });
    }
}