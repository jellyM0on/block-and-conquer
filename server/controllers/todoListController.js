import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { todoListService } from "../services/todoListService.js";

class TodoListController extends BaseController {

}

const constraints = {
    create: (req) => ({ data: req.body }),
    getAll: (req) => ({ id: req.params.userId, }),
    update: (req) => ({ id: req.params.listItemId, data: req.body }),
    delete: (req) => ({ id: req.params.listItemId, data: req.body })
}

const userController = new UserController(userService, constraints);

export { userController }