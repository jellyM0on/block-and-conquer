import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { collaboratorService } from "../services/cardService.js";

class CollaboratorController extends BaseController {
  
    getAllFromUser = asyncHandler(async(req, res) => {
        const data = await this.service.getAll(this.model, ({ userId: req.params.userId })); 
        return res.status(200).json(data); 
    });

}

const constraints = {
    get: (req) => ({ deckId: req.params.deckId, userId: req.params.userId }),
    getAll: (req) => ({ deckId: req.params.deckId }),
    update: (req) => ({ deckId: req.params.deckId, userId: req.params.userId }), 
    delete: (req) => ({ deckId: req.params.deckId, userId: req.params.userId })
}

const collaboratorController = new CollaboratorController(collaboratorService, constraints);

export { collaboratorController }
