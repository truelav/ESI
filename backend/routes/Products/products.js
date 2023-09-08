import express from "express";

import * as ProductsControllers from "../../controllers/Product/ProductController.js";

const router = express.Router();

router.post("/", ProductsControllers.createProduct);
router.get("/", ProductsControllers.getAllProducts);

export default router;
