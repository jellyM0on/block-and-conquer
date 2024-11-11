import express from "express";
// import { getCards, getCard, createCard, updateCard, deleteCard } from "../controllers/cardController.js";
import { cardController } from "../controllers/cardController.js";

const router = express.Router(); 

router.get("/api/cards/:deckId", cardController.getAll);

router.get("/api/cards/:deckId/:cardId", cardController.get);

router.post("/api/cards/:deckId", cardController.create);
router.put("/api/cards/:deckId/:cardId", cardController.update);
router.delete("/api/cards/:deckId/:cardId", cardController.delete);

export default router; 