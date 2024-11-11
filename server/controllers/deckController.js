import { Deck } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import { Base } from "./baseController.js"


class DeckController extends Base {

    getUserDecks = asyncHandler(async(req, res) => {
        const { userId } = req.params;
        const decks = await this.model.findAll({
            where: {
                userId : userId
            }
        }); 
        res.status(200).json(decks); 
    });
}

const constraints = {
    get: (req) => ({ id: req.params.deckId }),
    getAll: (req) => ({ privacy: "Public"}),
    update: (req) => ({ id: req.params.deckId}), 
    delete: (req) => ({ id: req.params.deckId})
}

const deckController = new DeckController(Deck, constraints); 

export { deckController }