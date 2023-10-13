import express from "express";
import * as ProductControllers from "../../controllers/Product/index.js";
import isAuth from "../../middleware/auth/isLoggedIn.js";
import isAdmin from "../../middleware/auth/isAdmin.js";
import isLoggedIn from "../../middleware/auth/isLoggedIn.js";

const router = express.Router();

router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getProduct);
router.post("/addOne", isAdmin, ProductControllers.addProduct);
router.post("/addMultiple", ProductControllers.addMultipleProducts);
router.put("/", ProductControllers.editMultipleProducts);
router.put("/:id", ProductControllers.editProduct);
router.delete("/:id", ProductControllers.removeProduct);
router.delete("/", ProductControllers.removeMultipleProducts);

export default router;
