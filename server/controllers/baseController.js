import asyncHandler from "../utils/asyncHandler.js";


class BaseController {
    constructor(service, constraints){
         this.service = service; 
         this.constraints = constraints; 
    }

    get = asyncHandler(async(req,res, next) => {
        const data = await this.service.getOne(this.constraints.get(req));
        return res.status(200).json(data)
    })

    getAll = asyncHandler(async(req,res, next) => {
        const data = await this.service.getAll(this.constraints.getAll(req));
        return res.status(200).json(data)
    })

    create = asyncHandler(async(req,res, next) => {
        const data = await this.service.createOne(req.body);
        res.status(200).json(data);
    })

    update = asyncHandler(async(req,res, next) => {
        const data = await this.service.updateOne(this.constraints.update(req), req.body);
        res.status(200).json(data);
    })

    delete = asyncHandler(async(req,res, next) => {
        const data = await this.service.deleteOne(this.constraints.delete(req));
        res.status(200).json(data);
    })
}

export { BaseController }