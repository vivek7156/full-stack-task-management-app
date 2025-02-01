import { Router } from "express";
import { getUsersOrders, createOrder } from "../controllers/order.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.get("/orders", authMiddleware, getUsersOrders);
router.post("/order", authMiddleware, createOrder);

export default router;