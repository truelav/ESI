import express from "express";

import * as ProductsControllers from "../../controllers/Product/ProductControllers.js";

const router = express.Router();

router.get("/", ProductsControllers.getAllProducts);
router.post("/", ProductsControllers.createProduct);

export default router;
