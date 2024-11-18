import express from "express";
import { userController } from "../controllers/userController.js";

const router = express.Router();

router.post("api/user/", userController.create);
router.get("/api/user/:userId", userController.get);
router.put("/api/user/:userId", userController.update);
router.delete("/api/user/:userId", userController.delete);

export default router;