import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const ConquestModel = sequelize.define("Conquest", {
    id: {
        type: dt.INTEGER,
        primaryKey: true,
    },
    description: {
        type: dt.TEXT,
    },
    reward: {
        type: dt.TEXT,
    },
    progressIncrement: {
        type: dt.FLOAT,
    },
    feature: {
        type: dt.TEXT,
    },
    createdAt : {
        type: dt.DATE,
    }, 
    updatedAt: {
        type: dt.DATE,
    }
},  {
    tableName: "Conquests",
    timestamps: true
})

export { ConquestModel }