import express from "express";
import { getDecks, getUserDecks, getDeck, createDeck, updateDeck, deleteDeck } from "../controllers/deckController.js";

const router = express.Router(); 

//get all decks
router.get("/api/decks", getDecks);

//get all decks from a user
router.get("/api/decks/:userId", getUserDecks);

//get a deck
router.get("/api/decks/:deckId", getDeck);
router.post("/api/decks/:deckId", createDeck);
router.patch("/api/decks/:deckId", updateDeck);
router.delete("/api/decks/:deckId", deleteDeck);

export default router; 

