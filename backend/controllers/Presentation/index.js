import PDFDocument from "pdfkit"
import fs from 'fs'

import Product from "../../models/Product/Product.js";

export const createPDFPresentation = async (req, res) => {
    try {
        console.log(req.body)
        const { prodIDs } = req.body  // should be an array of IDs

        if(prodIDs.length === 0) {
            res.status(300).json({message: "there are no products selected to create presentation"})
            return
        }

        const productDetails = await Product.find({ '_id': { $in: prodIDs}})

        if(!productDetails){
            res.status(300).json({message: "Oooops something went wrong in Database"})
            return
        }

        const pdfPresentation = new PDFDocument();

        pdfPresentation
            .pipe(fs.createWriteStream('static/presentation.pdf'));

        productDetails.forEach((product) => {
            pdfPresentation.addPage()

            // Embed a font, set the font size, and render some text
            pdfPresentation
                .fontSize(25)
                .text(product.model + product.description, 100, 100);
    
            // Add an image, constrain it to a given size, and center it vertically and horizontally
            pdfPresentation.image("static/images/product.png", {
                fit: [250, 300],
                align: 'center',
                valign: 'center'
            });
        })    

        pdfPresentation.end()

        res.status(300).json({message: "Presentation created success"})

    } catch(error){
        console.log(error)
    }
}