
class BaseService {

    static async getOne(model, constraint){
        const data = await model.findOne({
            where: constraint
        });
        return data; 
    }

    static async getAll(model, constraint){
        const data = await model.findAll({
            where: constraint
        })
        return data; 
    }

    static async createOne(model, data){
        const newData = model.build(data); 
        newData.validate(); 
        await newData.save();
        return newData; 
    }

    static async updateOne(model, constraint, data){
        const updatedFields = data; 
        const updatedData = await model.update(updatedFields,  {
            where: constraint
        });
        return updatedData; 
    }

    static async deleteOne(model, constraint){
        const data = await model.destroy({
            where: constraint
        });
        return "Deleted";  
    }
}

export { BaseService }