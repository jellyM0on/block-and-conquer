import { Friends } from "../models/index.js";
import { BaseService } from "./baseService.js";
import { Op } from "sequelize";

class FriendsService extends BaseService {

    async getOneFriend(constraint){
        const data = await this.model.findOne({
            where: {
                [Op.or]: [constraint]
            }
        });
        return data; 
    }

    async getAllFriends(constraint){
        const data = await this.model.findAll({
            where: {
                [Op.or]: [constraint]
            }
        });
        return data; 
    }

    async acceptFriends(constraint, data){
        const updatedFields = data; 
        const updatedData = await this.model.update(updatedFields,  {
            where: {
                [Op.or]: [constraint]
            }
        });
        return updatedData; 
    }

    async deleteFriends(constraint){
        const data = await this.model.destroy({
            where: {
                [Op.or]: [constraint]
            }
        });
        return "Deleted";  
    }
}

const friendsService = new FriendsService(Friends);

export { friendsService }