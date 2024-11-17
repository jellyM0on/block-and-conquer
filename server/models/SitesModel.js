import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const SitesModel = sequelize.define("Sites", {
    siteURL: {
        type: dt.STRING,
        primaryKey: true,
    },
    userId: {
        type: dt.INTEGER,
        primaryKey: true,
    },
    status: {
        type: dt.STRING,
        validate: {
            isIn: [["Active", "Inactive"]]
        }
    }

}, {
    tableName: "Sites",
    timestamps: true
})

export { SitesModel }