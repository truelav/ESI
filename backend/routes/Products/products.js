import express from "express";
import * as ProductControllers from "../../controllers/Product/index.js";
import { upload } from "../../middleware/upload/index.js";
import { uploadProductsFile } from "../../middleware/upload/uploadProductsFile.js";

const router = express.Router();

router.get("/", ProductControllers.getAllProducts);
router.get("/brandedProducts", ProductControllers.getBrandedProducts);
router.get("/:id", ProductControllers.getSingleProduct);

router.delete("/", ProductControllers.deleteMultipleProducts);
router.delete("/:id", ProductControllers.deleteSingleProduct);
router.delete("/image/:id", ProductControllers.deleteProductImage);

router.post("/", upload.single("image"), ProductControllers.addSingleProduct);
router.post("/addMultiple", uploadProductsFile.single("csv"), ProductControllers.addMultipleProducts);

router.put("/:id", upload.single("images"), ProductControllers.editSingleProduct);
router.put("/", ProductControllers.editMultipleProducts);



export default router;
