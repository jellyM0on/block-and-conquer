import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { sitesService } from "../services/sitesService.js";

class SitesController extends BaseController {

}

const constraints = {
    create: (req) => ({ userId: req.params.userId }),
    getAll: (req) => ({ userId: req.params.userId }),
    update: (req) => ({ userId: req.params.userId, siteId: req.params.siteId }),
    delete: (req) => ({ userId: req.params.userId, siteId: req.params.siteId })
}

const sitesController = new SitesController(sitesService, constraints);

export { sitesController }