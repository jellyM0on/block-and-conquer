import asyncHandler from "../utils/asyncHandler.js";

class Base {
    constructor(model, constraints){
        this.model = model; 
        this.constraints = constraints
    }

    get = asyncHandler(async(req,res, next) => {
        const constraint = this.constraints.get ? this.constraints.get(req) : {};
        const data = await this.model.findOne({
            where: constraint
        });
        return res.status(200).json(data)
   
    })

    getAll = asyncHandler(async(req,res, next) => {
        const constraint = this.constraints.getAll ? this.constraints.getAll(req) : {};
        const data = await this.model.findAll({
            where: constraint
        })
        return res.status(200).json(data)
    })

    create = asyncHandler(async(req,res, next) => {
        const { data } = req.body; 
        const model = this.model.build(data); 
        model.validate(); 
        await model.save();
        res.status(200).json(model);
    })

    update = asyncHandler(async(req,res, next) => {
        const constraint = this.constraints.update ? this.constraints.update(req) : {};
        const updatedFields = req.body; 
        const model = await this.model.update(updatedFields,  {
            where: constraint
        });
        res.status(200).json(model);
    })

    delete = asyncHandler(async(req,res, next) => {
        const constraint = this.constraints.delete ? this.constraints.delete(req) : {};
        await Deck.destroy({
            where: constraint
        });
        res.status(200);
    })
}

export { Base }