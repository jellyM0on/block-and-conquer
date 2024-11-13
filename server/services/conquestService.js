import { Conquest, User } from "../models/index.js";
import { BaseService } from "./baseService.js";

class ConquestService extends BaseService {

    async getAllWithProgs(constraint){
        try{
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

        } catch(err){
            console.log(err); 
        }
       
        // const data = await User.findOne({
        //     where: constraint ,
        //     include: [
        //         { 
        //             model: Conquest,
        //             through: { attributes: ["progress"] }
        //         }, 
        //     ]
        // });
  
    }

}

const  conquestService = new ConquestService(Conquest); 

export { conquestService }