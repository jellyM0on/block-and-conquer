import { Deck } from "../models/index.js";
import { DeckComment } from "../models/index.js";

class DeckService {

    static async getOneWithComments(constraint){
        const data = await Deck.findOne({
            where: constraint ,
            include: [{ model: DeckComment, as: 'comments'}]
        });
        return data; 
    }

    
}

export { DeckService }