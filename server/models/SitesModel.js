import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const SitesModel = sequelize.define("Sites", {
    siteId: {
        type: dt.INTEGER,
        primaryKey: true,
    },
    userId: {
        type: dt.INTEGER,
        allowNull: false
    },
    siteURL: {
        type: dt.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    status: {
        type: dt.STRING,
        allowNull: false,
        defaultValue: "Active",
        validate: {
            isIn: [["Active", "Inactive"]]
        }
    }

}, {
    tableName: "Sites",
    timestamps: true
})

export { SitesModel }