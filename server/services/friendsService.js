import { Friends } from "../models/index.js";
import { BaseService } from "./baseService.js";

class FriendsService extends BaseService {

}

const friendsService = new FriendsService(Friends);

export { friendsService }