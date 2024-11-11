import express from "express";
import { deckController } from "../controllers/deckController.js";

const router = express.Router(); 

//get all decks
router.get("/api/decks", deckController.getAll);

//get all decks from a user
router.get("/api/decks/users/:userId", deckController.getUserDecks);

// //get a deck
router.get("/api/decks/:deckId", deckController.get);
router.post("/api/decks/:deckId", deckController.create);
router.patch("/api/decks/:deckId", deckController.update);
router.delete("/api/decks/:deckId", deckController.delete);

export default router; 

