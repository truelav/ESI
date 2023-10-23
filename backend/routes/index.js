import express from "express";
import authRoutes from "./Auth/auth.js";
import productsRoutes from "./Products/products.js";
import presentationRoutes from "./Presentation/presentation.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", productsRoutes);
router.use("/presentation", presentationRoutes);

export default router;
