import { Deck } from "../models/index.js";
import { DeckComment } from "../models/index.js";
import { BaseService } from "./baseService.js";

class DeckService extends BaseService {

    async getOneWithComments(constraint){
        const data = await Deck.findOne({
            where: constraint ,
            include: [{ model: DeckComment, as: 'comments'}]
        });
        return data; 
    }

    
}

const deckService = new DeckService(Deck); 

export { deckService }