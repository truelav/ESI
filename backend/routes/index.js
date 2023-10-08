import express from "express";
import productsRoutes from "./Products/products.js";
import authRoutes from "./Auth/auth.js";
import presentationRoutes from "./Presentation/presentation.js";

const router = express.Router();

router.use("/products", productsRoutes);
router.use("/auth", authRoutes);
router.use("/presentation", presentationRoutes);

export default router;
