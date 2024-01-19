import express from "express";
import * as OrderControllers from "../../controllers/Order/index.js";

const router = express.Router();

router.get("/", OrderControllers.getAllOrders);
router.post("/", OrderControllers.createOrder)
router.delete('/', OrderControllers.deleteOrders)

export default router;
