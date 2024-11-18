import { ProfileItems } from "../models/index.js";
import { BaseService } from "./baseService.js";

class ProfileItemsService extends BaseService {

}

const profileItemsService = new ProfileItemsService(ProfileItems);

export { profileItemsService }