import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { userService } from "../services/userService.js";

class UserController extends BaseController {

}

const constraints = {
    create: (req) => ({  }),
    get: (req) => ({ id: req.params.id }),
    update: (req) => ({ id: req.params.id, points: req.body }),
    delete: (req) => ({ id: req.params.id })
}

const userController = new UserController(userService, constraints);

export { userController }