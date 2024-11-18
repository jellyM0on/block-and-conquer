import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { userService } from "../services/userService.js";

class UserController extends BaseController {

}

const constraints = {
    create: (req) => ({ details: req.body }),
    get: (req) => ({ id: req.params.userId }),
    update: (req) => ({ id: req.params.userId, points: req.body }),
    delete: (req) => ({ id: req.params.userId })
}

const userController = new UserController(userService, constraints);

export { userController }