import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const Collaborator = sequelize.define("Collaborator", {
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
},  {
    tableName: "Collaborators",
    timestamps: true
})

export { Collaborator }