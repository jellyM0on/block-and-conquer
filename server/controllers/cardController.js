import { Card } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import { Base } from "./baseController.js";


class CardController extends Base {

}

const constraints = {
    get: (req) => ({ id: req.params.cardId, deckId: req.params.deckId }),
    getAll: (req) => ({ deckId: req.params.deckId}),
    update: (req) => ({ id: req.params.cardId, deckId: req.params.deckId }), 
    delete: (req) => ({ id: req.params.cardId, deckId: req.params.deckId })
}

const cardController = new CardController(Card, constraints); 

export { cardController }
