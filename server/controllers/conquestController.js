import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { conquestService } from "../services/conquestService.js";


class ConquestController extends BaseController {

}

const constraints = {
    get: (req) => ({ id: req.params.conquestId }),
    getAll: (req) => ({ }),
    update: (req) => ({ id: req.params.conquestId }), 
    delete: (req) => ({ id: req.params.conquestId })
}

const conquestController  = new ConquestController(conquestService, constraints); 

export { conquestController }
