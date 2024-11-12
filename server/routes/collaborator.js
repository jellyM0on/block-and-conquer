import express from "express";
import { collaboratorController } from "../controllers/collaboratorController.js";

const router = express.Router(); 

// get collabs of a deck
router.get("/api/collabs/:deckId", collaboratorController.getAll);

// get collabs of a user 
router.get("/api/collabs/users/:userId", collaboratorController.getAllFromUser);

router.post("/api/collabs/:deckId", collaboratorController.create);
router.put("/api/user/:userId/collabs/:deckId", collaboratorController.update);
router.delete("/api/user/:userId/collabs/:deckId", collaboratorController.delete);

export default router; 