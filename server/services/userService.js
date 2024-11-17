import { User } from "../models/index.js";
import { BaseService } from "./baseService.js";

class UserService extends BaseService {

}

const userService = new UserService(User);

export { userService }