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
        .pipe(parse({delimiter: ","}))
        .on('data', (row) => {
          // const newProduct = new Product({
          //   name: row.name,
          //   brand: row.brand,
          //   description: row.description,
          //   category: row.category,
          //   quantity: row.quantity,
          //   images: row.images,
          //   location: row.location,
          //   subcategory: row.upc
          // });

          newProducts.push(row)
        })
        .on('end', () => {
          console.log(newProducts);
          // [
          //   { NAME: 'Daffy Duck', AGE: '24' },
          //   { NAME: 'Bugs Bunny', AGE: '22' }
          // ]
          // Product.insertMany(newProducts)
          //   .then(() => {
          //     res.status(200).json(`success, all ${newProducts.length} were added`);
          //   })
          //   .catch((error) => {
          //     console.error(error);
          //     res.status(500).send('Internal Server Error');
          //   })
        });
        res.status(200).json(`success, all ${newProducts.length} were added`);
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: error });
      }
}
