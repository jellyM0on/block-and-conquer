import { DataTypes as dt, STRING } from "sequelize";
import { sequelize } from "../config/database.js";

const ProfileItemsModel = sequelize.define("ProfileItems", {
    itemId: {
        type: dt.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: dt.STRING,
    },
    name: {
        type: dt.STRING,
    },
    price: {
        type: dt.DECIMAL,
    },
    style: {
        type: dt.STRING,
    },
    image: {
        type: dt.STRING,
    }

}, {
    tableName: "ProfileItems",
    timestamps: true
})

export { ProfileItemsModel }