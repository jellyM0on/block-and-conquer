import asyncHandler from "../utils/asyncHandler.js";
import { BaseController } from "./baseController.js";
import { conquestProgService } from "../services/conquestProgService.js";


class ConquestProgController extends BaseController {

}

const constraints = {
    get: (req) => ({ userId: req.params.userId, conquestId: req.params.conquestId }),
    getAll: (req) => ({ userId: req.params.userId }),
    update: (req) => ({  userId: req.params.userId, conquestId: req.params.conquestId }), 
    delete: (req) => ({  userId: req.params.userId, conquestId: req.params.conquestId })
}

const conquestProgController  = new ConquestProgController(conquestProgService, constraints); 

export { conquestProgController }
