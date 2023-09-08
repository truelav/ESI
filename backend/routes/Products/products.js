import express from "express";

import * as ProductControllers from "../../controllers/Product/index.js";

const router = express.Router();

router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getProduct);
router.post("/addOne", ProductControllers.addProduct);
router.post("/addMultiple", ProductControllers.addMultipleProducts);
router.put("/", ProductControllers.editMultipleProducts)
router.put("/:id", ProductControllers.editProduct)
router.delete("/:id", ProductControllers.removeProduct)
router.delete("/", ProductControllers.removeMultipleProducts)

export default router;
