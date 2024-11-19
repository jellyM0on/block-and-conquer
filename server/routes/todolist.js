import express from "express";
import { todoListController } from "../controllers/todoListController.js";

const router = express.Router();

router.post("/api/todo/:userId", todoListController.create); // working
router.get("/api/todo/:userId", todoListController.getAll); // working
router.put("/api/todo/:userId/:todoId", todoListController.update); // working
router.delete("/api/todo/:userId/:todoId", todoListController.delete); //working

export default router;