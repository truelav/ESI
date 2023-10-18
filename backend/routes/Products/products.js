import express from "express";
import * as ProductControllers from "../../controllers/Product/index.js";
import isAuth from "../../middleware/auth/isLoggedIn.js";
import isAdmin from "../../middleware/auth/isAdmin.js";
import isLoggedIn from "../../middleware/auth/isLoggedIn.js";
import { upload } from "../../middleware/upload/index.js";

const router = express.Router();

router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getSingleProduct);
router.post("/", ProductControllers.addSingleProduct);
router.post("/addMultiple", ProductControllers.addMultipleProducts);
router.put("/", ProductControllers.editMultipleProducts);
router.put("/:id", ProductControllers.editProduct);
router.delete("/:id", ProductControllers.deleteSingleProduct);
router.delete("/", ProductControllers.deleteMultipleProducts);

router.post("/upload", upload.single('image'), ProductControllers.uploadProductImage)

export default router;
