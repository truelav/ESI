import fs from 'fs'
import streamifier from "streamifier"
import parse from 'csv-parser';
import Product from "../../models/Product/Product.js";

export const addMultipleProducts = async (req, res) => {
  try {
      const {buffer} = req.file
      const newProducts = []
        // Parse the document into the fields and add each Product
      streamifier.createReadStream(buffer)
        .pipe(parse({delimiter: ",", ignoreEmpty: true}))
        .on('data', (row) => {
          const newProduct = new Product({
            name: row.Brand,
            brand: row.Brand,
            description: row.Description,
            category: row.Category,
            quantity: row["Qty's"],
            images: row.images,
            location: "Los Angeles",
            subcategory: row.UPC
          });

          newProducts.push(newProduct)
        })
        .on('end', async () => {
          console.log(newProducts);
          // [
          //   { NAME: 'Daffy Duck', AGE: '24' },
          //   { NAME: 'Bugs Bunny', AGE: '22' }
          // ]
          await Product.insertMany(newProducts)
            .then(() => {
              res.status(200).json(`success, all ${newProducts.length} were added`);
            })
            .catch((error) => {
              console.error(error);
              res.status(500).send('Internal Server Error');
            })
        });
        // res.status(200).json(`success, all ${newProducts.length} were added`);
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: error });
      }
}
