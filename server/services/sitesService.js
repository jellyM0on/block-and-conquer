import { Sites } from "../models/index.js";
import { BaseService } from "./baseService.js";

class SitesService extends BaseService {

}

const sitesService = new ProfileItemsService(Sites);

export { sitesService }