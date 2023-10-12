import express from "express";
import authRoutes from "./Auth/auth.js";
import productsRoutes from "./Products/products.js";
import usersRoutes from './Users/users.js'
import presentationRoutes from "./Presentation/presentation.js";
import isLoggedIn from "../middleware/auth/isLoggedIn.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", isLoggedIn, productsRoutes);
router.use("/users", usersRoutes);
router.use("/presentation", presentationRoutes);

export default router;
