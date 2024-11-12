import { DeckComment } from "../models/index.js";
import { BaseService } from "./baseService.js";

class DeckCommentService extends BaseService {
    
}

const deckCommentService = new DeckCommentService(DeckComment); 

export { deckCommentService }