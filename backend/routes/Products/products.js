import express from "express";
import * as ProductControllers from "../../controllers/Product/index.js";
import { upload } from "../../middleware/upload/index.js";

const router = express.Router();

router.delete("/image/:id", ProductControllers.deleteProductImage);

router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getSingleProduct);
router.post("/", upload.single("image"), ProductControllers.addSingleProduct);
router.put("/", ProductControllers.editMultipleProducts);
router.put("/:id", ProductControllers.editProduct);
router.delete("/:id", ProductControllers.deleteSingleProduct);
router.delete("/", ProductControllers.deleteMultipleProducts);

router.post(
    "/addMultiple",
    upload.single("csv"),
    ProductControllers.addMultipleProducts
);
router.post(
    "/upload",
    upload.single("image"),
    ProductControllers.uploadProductImage
);



export default router;
