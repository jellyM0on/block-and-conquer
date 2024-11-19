import { ToDoList } from "../models/index.js";
import { BaseService } from "./baseService.js";

class TodoListService extends BaseService {

}

const todoListService = new TodoListService(ToDoList);

export { todoListService }