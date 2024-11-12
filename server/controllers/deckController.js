import { Deck } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js"
import { BaseService } from "../services/baseService.js";

class DeckController extends BaseController {

    getAllFromUser = asyncHandler(async(req, res) => {
        const data = await BaseService.getAll(this.model, ({ userId: req.params.userId })); 
        return res.status(200).json(data); 
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