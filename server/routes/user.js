import express from "express";
import { userController } from "../controllers/userController.js";

const router = express.Router();

router.post("api/user/", userController.create);
router.get("/api/user/:id", userController.get);
router.put("/api/user/:id", userController.update);
router.delete("/api:user/:id", userController.delete);

export default router;