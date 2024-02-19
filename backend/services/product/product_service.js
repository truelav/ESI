import Product from "../../models/Product/Product.js";
import { transformPrice } from "../../utils/transformPrice.js"

export const serializeProductData = (product) => {

}


export const updateProductService = (newProducts, row) => {
    const fallbackImage = "http://localhost:8888/static/images/fallback_image.jpeg"
    let numPrice = transformPrice(row.Price)

    const product = new Product({
        brand: row.Brand,
        model: row.Model,
        description: row.Description,
        category: row.Category ,
        subcategory: row.subcategory,
        upc: row.UPC || 'No UPC Provided',
        price: numPrice || 1,
        quantity: row["Qty's"],
        images: row.images || fallbackImage,
        isActive: true
    });

    newProducts.push(product);
}

export const bulkProductOperations = (newProducts) => {
    const bulkOps = newProducts.map((product) => ({
        updateOne: {
            filter: { model: product.model },
            update: {
                $set: {
                    brand: product.brand,
                    model: product.model,
                    price: product.price,
                    description: product.description,
                    category: product.category,
                    subcategory: product.subcategory,
                    quantity: product.quantity,
                    images: product.images,
                    upc: product.upc,
                },
            },
            upsert: true, // Creates a new document if no match is found
        },
    }));

    return bulkOps
}