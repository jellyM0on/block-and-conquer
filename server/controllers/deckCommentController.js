import { DeckComment } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";


class DeckCommentController extends BaseController {

}

const constraints = {
    get: (req) => ({ }),
    getAll: (req) => ({ }),
    update: (req) => ({ }), 
    delete: (req) => ({ })
}

const deckCommentController  = new DeckCommentController(DeckComment, constraints); 

export { deckCommentController }
