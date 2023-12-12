import express from "express";
import authRoutes from "./Auth/auth.js";
import cartRoutes from "./Cart/cart.js"
import productsRoutes from "./Products/products.js";
import presentationRoutes from "./Presentation/presentation.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/cart", cartRoutes)
router.use("/products", productsRoutes);
router.use("/presentation", presentationRoutes);

export default router;
