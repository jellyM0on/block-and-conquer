import { Conquest, User } from "../models/index.js";
import { BaseService } from "./baseService.js";

class ConquestService extends BaseService {

    async getAllWithProgs(constraint){
        const data = await User.findOne({
            where: constraint, 
            include: [
                {
                    model: Conquest,
                    through: { attributes: ["progress"]}
                },
            ],
            attributes: [],
        })
        return data; 
    }

}

const  conquestService = new ConquestService(Conquest); 

export { conquestService }