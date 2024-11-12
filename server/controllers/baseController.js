import asyncHandler from "../utils/asyncHandler.js";
import { BaseService } from "../services/baseService.js";


class BaseController {
    constructor(model, constraints){
        this.model = model; 
        this.constraints = constraints; 
    }

    get = asyncHandler(async(req,res, next) => {
        const data = await BaseService.getOne(this.model, this.constraints.get(req)); 
        return res.status(200).json(data)
    })

    getAll = asyncHandler(async(req,res, next) => {
        const data = await BaseService.getAll(this.model, this.constraints.getAll(req));
        return res.status(200).json(data)
    })

    create = asyncHandler(async(req,res, next) => {
        const data = await BaseService.createOne(this.model, req.body);
        res.status(200).json(data);
    })

    update = asyncHandler(async(req,res, next) => {
        const data = await BaseService.updateOne(this.model, this.constraints.update(req), req.body);
        res.status(200).json(data);
    })

    delete = asyncHandler(async(req,res, next) => {
        const data = await BaseService.deleteOne(this.model, this.constraints.delete(req));
        res.status(200).json(data);
    })
}

export { BaseController }