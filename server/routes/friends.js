import express from "express";
import { friendsController } from "../controllers/friendsController.js";

const router = express.Router();

router.post("/api/friends/:friendId", friendsController.create);
router.get("/api/friends/list/:userId", friendsController.getAll);
router.get("/api/friends/:friendId", friendsController.get);
router.put("/api/friends/:friendId", friendsController.update);
router.delete("/api/friends/:friendId", friendsController.delete);

export default router;