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
        console.log(productDetails.length)
        if(!productDetails){
            res.status(300).json({message: "Oooops something went wrong in Database"})
            return
        }

        const pdfPresentation = new PDFDocument({
            displayTitle: true,
        });

        pdfPresentation.info['Title'] = 'ESI Enterprises'

        const struct = pdfPresentation.struct('Document')
        pdfPresentation.addStructure(struct)

        pdfPresentation
            .pipe(fs.createWriteStream('static/presentation.pdf'));


        productDetails.forEach((product) => {
            pdfPresentation.addPage({
                size: "A4", 
                layout: "landscape"
            })

            pdfPresentation.rect(0, 0, 300, 200).fill('#0074D9')

            // Embed a font, set the font size, and render some text
            pdfPresentation.font('Helvetica-Bold').fillColor('white').fontSize(16);
            pdfPresentation.text(product.brand, 25, 25)

            // Embed a font, set the font size, and render some text
            pdfPresentation.font('Helvetica-Bold').fillColor('white').fontSize(12);
            pdfPresentation.text(product.model, 25, 60)

            // Embed a font, set the font size, and render some text
            pdfPresentation.font('Helvetica-Bold').fillColor('black').fontSize(12);
            pdfPresentation.text(product.description, 400, 25)

            // Add an image, constrain it to a given size, and center it vertically and horizontally
            pdfPresentation.image("static/images/product.png", {
                fit: [250, 300],
                align: 'center',
                valign: 'center'
            });
        })    

        pdfPresentation.end()

        res.status(300).json({message: "Presentation created success", link: ""})

    } catch(error){
        console.log(error)
    }
}