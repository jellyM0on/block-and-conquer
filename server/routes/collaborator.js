import express from "express";
import { getCollaborations, getCollaborators, createCollaboration, 
    updateCollaboration, deleteCollaboration } 
    from "../controllers/cardController.js";

const router = express.Router(); 

// get collabs of a deck
router.get("/api/collab/:deckId", getCollaborators);

// get collabs of a user 
router.get("/api/collab/:userId", getCollaborations);

router.post("/api/collab/:deckId", createCollaboration);
router.put("/api/collab/:deckId/", updateCollaboration);
router.delete("/api/collab/:deckId/", deleteCollaboration);

export default router; 