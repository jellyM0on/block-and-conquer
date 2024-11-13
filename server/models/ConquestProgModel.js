import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const ConquestProgModel = sequelize.define("Conquest", {
    userId: {
        type: dt.INTEGER,
        primaryKey: true,
    },
    conquestId: {
        type: dt.INTEGER,
        primaryKey: true,
    },
    progress: {
        type: dt.FLOAT,
    },
    createdAt : {
        type: dt.DATE,
    }, 
    updatedAt: {
        type: dt.DATE,
    }
},  {
    tableName: "ConquestProgs",
    timestamps: true
})

export { ConquestProgModel }