import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { deckCommentService } from "../services/deckCommentService.js";


class DeckCommentController extends BaseController {

}

const constraints = {
    get: (req) => ({ }),
    getAll: (req) => ({ }),
    update: (req) => ({ }), 
    delete: (req) => ({ })
}

const deckCommentController  = new DeckCommentController(deckCommentService, constraints); 

export { deckCommentController }
