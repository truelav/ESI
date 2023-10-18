import Image from "../../models/Product/Image.js"

export const uploadProductImage = async (req, res) => {
    try {

        const { originalname, buffer, mimetype } = req.file;

        const newImage = new Image({
          name: originalname,
          data: buffer,
          contentType: mimetype,
        });
    
        const response = await newImage.save();
        res.status(200).json({response});

    } catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

