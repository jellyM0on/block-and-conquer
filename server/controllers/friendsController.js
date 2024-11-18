import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { friendsService } from "../services/friendsService.js";


class FriendsController extends BaseController {
    get = asyncHandler(async(req,res, next) => {
        const data = await this.service.getOneFriend(this.constraints.get(req)); 
        return res.status(200).json(data)
    })

    getAll = asyncHandler(async(req,res, next) => {
        const data = await this.service.getAllFriends(this.constraints.getAll(req));
        return res.status(200).json(data)
    })

    update = asyncHandler(async(req,res, next) => {
        const data = await this.service.acceptFriends(this.constraints.update(req), req.body);
        res.status(200).json(data);
    })

    delete = asyncHandler(async(req,res, next) => {
        const data = await this.service.deleteFriends(this.constraints.delete(req));
        res.status(200).json(data);
    })
}

const constraints = {
    create: (req) => ({ userId_1: req.params.userId, userId_2: req.params.friendId}),
    get: (req) => (
        { userId_1: req.params.userId, userId_2: req.params.friendId },
        { userId_1: req.params.friendId, userId_2: req.params.userId }
    ),
    getAll: (req) => (
        { userId_1: req.params.userId },
        { userId_2: req.params.userId }
    ),
    update: (req) => (
        { userId_1: req.params.userId, userId_2: req.params.friendId },
        { userId_1: req.params.friendId, userId_2: req.params.userId }
    ),
    delete: (req) => (
        { userId_1: req.params.userId, userId_2: req.params.friendId },
        { userId_1: req.params.friendId, userId_2: req.params.userId }
    )
}

const friendsController = new FriendsController(friendsService, constraints); 

export { friendsController }
