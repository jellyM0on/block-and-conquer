import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const CollaboratorModel = sequelize.define("Collaborator", {
    userId: {
        type: dt.INTEGER,
        primaryKey: true,
    },
    deckId: {
        type: dt.INTEGER,
        primaryKey: true,
    },
    status: {
        type: dt.STRING,
    },
    createdAt : {
        type: dt.DATE,
    }, 
    updatedAt: {
        type: dt.DATE,
    }
},  {
    tableName: "Collaborators",
    timestamps: true
})

export { CollaboratorModel }