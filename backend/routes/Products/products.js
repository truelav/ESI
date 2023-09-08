import express from "express";

import * as ProductControllers from "../../controllers/Product/index.js";

const router = express.Router();

router.get("/:id", ProductControllers.getProduct);
router.get("/", ProductControllers.getAllProducts);
router.post("/", ProductControllers.addProduct);

export default router;
