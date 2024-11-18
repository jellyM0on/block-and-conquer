import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./UserModel.js";

const FriendsModel = sequelize.define("Friends", {
    userId_1: {
        type: dt.INTEGER,
        primaryKey: true,
        references: {
            model: UserModel,
            key: "id",
        }
    },
    userId_2: {
        type: dt.INTEGER,
        primaryKey: true,
        references: {
            model: UserModel,
            key: "id",
        }
    },
    status: {
        type: dt.STRING,
        validate: {
            isIn: [["Accepted", "Pending"]]
        }
    }

}, {
    tableName: "Friends",
    timestamps: true
})

export { FriendsModel }