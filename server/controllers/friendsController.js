import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { friendsService } from "../services/friendsService.js";
import { Op } from "sequelize";

var tempUserId = '1';


class FriendsController extends BaseController {

    create = asyncHandler(async(req,res, next) => {
        const data = await this.service.createOne(this.constraints.create(req));
        res.status(200).json(data);
    })

    get = asyncHandler(async(req,res, next) => {
        const data = await this.service.getOneFriend(this.constraints.get(req)); 
        return res.status(200).json(data)
    })

    getAll = asyncHandler(async(req,res, next) => {
        console.log("controller")
        const data = await this.service.getAllFriends(this.constraints.getAll(req));
        return res.status(200).json(data)
    })

    update = asyncHandler(async(req,res, next) => {
        const data = await this.service.acceptFriends(this.constraints.update(req), req.body);
        res.status(200).json(data);
    })

    delete = asyncHandler(async(req,res, next) => {
        console.log(this.constraints.delete(req));
        const data = await this.service.deleteFriends(this.constraints.delete(req));
        res.status(200).json(data);
    })
}

const constraints = {
    create: (req) => ({
        userId_1: tempUserId,
        userId_2: req.params.friendId,
        status: "Pending"
    }),
    get: (req) => ({
        [Op.or]: [
            { userId_1: tempUserId, userId_2: req.params.friendId },
            { userId_1: req.params.friendId, userId_2: tempUserId }
        ]
    }),
    getAll: (req) => ({
        [Op.or]: [
            { userId_1: req.params.userId },
            { userId_2: req.params.userId }
        ]
    }),
    update: (req) => ({
        [Op.or]: [
            { userId_1: tempUserId, userId_2: req.params.friendId },
            { userId_1: req.params.friendId, userId_2: tempUserId }
        ]
    }),
    delete: (req) => ({
        [Op.or]: [
            { userId_1: tempUserId, userId_2: req.params.friendId },
            { userId_1: req.params.friendId, userId_2: tempUserId }
        ]
    })
};


const friendsController = new FriendsController(friendsService, constraints); 

export { friendsController }
