import streamifier from "streamifier";
import parse from "csv-parser";
import Product from "../../models/Product/Product.js";

export const addMultipleProducts = async (req, res) => {
  try {
    const { buffer } = req.file;
    const newProducts = [];
    // Parse the document into the fields and add each Product
    streamifier
      .createReadStream(buffer)
      .pipe(parse({ delimiter: ",", ignoreEmpty: true }))
      .on("data", (row) => {
        const product = new Product({
          name: row.Name,
          brand: row.Brand,
          model: row.Model,
          price: row.Price,
          description: row.Description,
          category: row.Category,
          subcategory: row.subcategory,
          quantity: row["Qty's"],
          images: row.images,
          upc: row.UPC,
        });
        //  console.log(product)
        newProducts.push(product);
      })
      .on("end", async () => {
        const bulkOps = newProducts.map((product) => ({
          updateOne: {
            filter: { model: product.model },
            update: {
              $set: {
                name: product.name,
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
        // console.log(newProducts);
        await Product.bulkWrite(bulkOps)
          .then((result) => {
            // console.log(result);
            res
              .status(200)
              .json(`success, all ${newProducts.length} were added, ${result}`);
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Internal Server Error");
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
