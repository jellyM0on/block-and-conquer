import express from "express";
import { friendsController } from "../controllers/friendsController.js";

const router = express.Router();

router.post("api/friends/", friendsController.create);
router.get("/api/friends/:userId", friendsController.getAll);
router.get("/api/friends/:userId-:friendId", friendsController.get);
router.put("/api/friends/:userId-:friendId", friendsController.update);
router.delete("/api/friends/:userId-:friendId", friendsController.delete);

export default router;