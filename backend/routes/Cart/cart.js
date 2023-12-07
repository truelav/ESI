import express from "express";
import * as ProductControllers from "../../controllers/Product/index.js";

const router = express.Router();

router.get("/", ProductControllers.getAllProducts);
router.delete("/", ProductControllers.deleteMultipleProducts);
router.post("/", ProductControllers.addSingleProduct);


export default router;
