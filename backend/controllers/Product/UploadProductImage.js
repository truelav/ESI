// import Image from "../../models/Product/Image.js";
import sharp from "sharp";

export const uploadProductImage = async (req, res) => {
  try {
    const { originalname, buffer, mimetype } = req.file;
    console.log(req.file);
    // await sharp(buffer)
    //   .resize({ width: 250, height: 250 })
    //   .jpeg()
    //   .toFile(`static/images/${originalname}`);
    // All good
    res.status(200).json({ message: `Image was uploaded success` });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
