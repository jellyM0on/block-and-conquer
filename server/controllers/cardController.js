import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { cardService } from "../services/cardService.js";


class CardController extends BaseController {

}

const constraints = {
    get: (req) => ({ id: req.params.cardId, deckId: req.params.deckId }),
    getAll: (req) => ({ deckId: req.params.deckId}),
    update: (req) => ({ id: req.params.cardId, deckId: req.params.deckId }), 
    delete: (req) => ({ id: req.params.cardId, deckId: req.params.deckId })
}

const cardController = new CardController(cardService, constraints); 

export { cardController }
