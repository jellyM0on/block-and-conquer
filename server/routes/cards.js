import express from "express";
import { getCards, getCard, createCard, updateCard, deleteCard } from "../controllers/cardController.js";

const router = express.Router(); 

router.get("/api/cards/:deckId", getCards);

router.get("/api/cards/:deckId/:cardId", getCard);
router.post("/api/cards/:deckId/:cardId", createCard);
router.put("/api/cards/:deckId/:cardId", updateCard);
router.delete("/api/cards/:deckId/:cardId", deleteCard);

export default router; 