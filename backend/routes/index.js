import express from "express";
import productsRoutes from "./Products/products.js";
import authRoutes from "./Auth/auth.js";

const router = express.Router();

router.use("/products", productsRoutes);
router.use("/auth", authRoutes);

export default router;
