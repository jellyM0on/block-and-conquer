import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./UserModel.js";

const FriendsModel = sequelize.define("Friends", {
    userId_1: {
        type: dt.INTEGER,
        allowNull: false,
        references: {
            model: UserModel,
            key: "userId",
        }
    },
    userId_2: {
        type: dt.INTEGER,
        allowNull: false,
        references: {
            model: UserModel,
            key: "userId",
        }
    },
    status: {
        type: dt.INTEGER,
        validate: {
            isIn: [["Accepted", "Pending"]]
        }
    }

}, {
    tableName: "Friends",
    timestamps: true
})

export { FriendsModel }