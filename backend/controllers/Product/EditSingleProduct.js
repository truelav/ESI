import Product from "../../models/Product/Product.js";

export const editSingleProduct = async (req, res) => {

    const {
        _id,
        name,
        brand,
        price,
        description,
        category,
        subcategory,
        quantity,
        images,
        upc,
    } = req.body;

    try {
        console.log("request file: " + req.file);
        await Product.findOneAndUpdate(
            {_id},
            {
                _id,
                name,
                brand,
                price,
                description,
                category,
                subcategory,
                quantity,
                images: "http://localhost:8888/static/images/" + req.file.filename,
                upc,
            },
        )

        res.status(200).json({ message: `Product ${name, brand} modified successfully` });

    } catch(error){
        console.log(error);
        res.status(500).json({ message: error });
    }
}