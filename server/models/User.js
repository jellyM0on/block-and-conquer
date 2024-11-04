import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const User = sequelize.define("User", {
    id: {
        type: dt.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
    },
    email: {
        type: dt.STRING,
        allowNull: false,
        unique: true
    },
}, {
    tableName: "Users",
    timestamps: true
})

export { User }