import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { todoListService } from "../services/todoListService.js";

var tempUserId = '1';

class TodoListController extends BaseController {

}

const constraints = {
    create: (req) => ({ userId: req.params.userId }),
    getAll: (req) => ({ userId: req.params.userId }),
    update: (req) => ({ userId: req.params.userId, listItemId: req.params.todoId }),
    delete: (req) => ({ userId: req.params.userId, listItemId: req.params.todoId })
}

const todoListController = new TodoListController(todoListService, constraints);

export { todoListController }