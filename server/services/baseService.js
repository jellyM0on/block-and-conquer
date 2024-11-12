
class BaseService {
    constructor(model){
        this.model = model; 
    }

    async getOne(constraint){
        const data = await this.model.findOne({
            where: constraint
        });
        return data; 
    }

    async getAll(constraint){
        const data = await this.model.findAll({
            where: constraint
        })
        return data; 
    }

    async createOne(data){
        const newData = this.model.build(data); 
        newData.validate(); 
        await newData.save();
        return newData; 
    }

    async updateOne(constraint, data){
        const updatedFields = data; 
        const updatedData = await this.model.update(updatedFields,  {
            where: constraint
        });
        return updatedData; 
    }

    async deleteOne(constraint){
        const data = await this.model.destroy({
            where: constraint
        });
        return "Deleted";  
    }
}

export { BaseService }