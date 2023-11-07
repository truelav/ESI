import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.body)
    cb(null, path.join('static/images'));
  },
  filename: (req, file, cb) => {
    console.log(req.file, req.body)
    // cb(null, file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, req.body.brand + '-' + req.body.model + '-' + uniqueSuffix + path.extname(file.originalname));
  },
  limits: {
    fileSize: 500000,
  },
  //   fileFilter(req, file, cb) {
  //     if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
  //       return cb(new Error("Please upload a valid image file"));
  //     }
  //     cb(undefined, true);
  //   },
});

export const upload = multer({ storage });
