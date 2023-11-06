import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "static/images");
  },
  filename: (req, file, cb) => {
    cb(null, path.extname(file.originalname));
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
