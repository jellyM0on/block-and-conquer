import { Collaborator } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import { Base } from "./baseController.js";

class CollaboratorController extends Base {

    getCollaborations = asyncHandler(async(req, res) => {
        const { userId } = req.params;
        const collaborations = await this.model.findAll({
            where: ({
                userId: userId
            })
        }); 
        res.status(200).json(collaborations); 
    });

}

const constraints = {
    get: (req) => ({ deckId: req.params.deckId, userId: req.params.userId }),
    getAll: (req) => ({ deckId: req.params.deckId }),
    update: (req) => ({ deckId: req.params.deckId, userId: req.params.userId }), 
    delete: (req) => ({ deckId: req.params.deckId, userId: req.params.userId })
}

const collaboratorController = new CollaboratorController(Collaborator, constraints);

export { collaboratorController }
