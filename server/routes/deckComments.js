import express from "express";
import { deckCommentController } from "../controllers/deckCommentController.js";

const router = express.Router(); 


router.post("/api/deck/:deckId/comment", deckCommentController.create);


export default router; 