import { Router } from "express";
import { addMenuItem, deleteMenuItem, getMenuItems, updateMenuItem } from "../controllers/menu.controller.js";

const router = Router();

router.get("/", getMenuItems);
router.post("/", addMenuItem);
router.put("/:id", updateMenuItem);
router.delete("/:id", deleteMenuItem);

export default router;