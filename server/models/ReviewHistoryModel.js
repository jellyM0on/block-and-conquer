import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const ReviewHistoryModel = sequelize.define("ReviewHistory", {
    date: {
        type: dt.DATE,
        primaryKey: true,
    },
    userId: {
        type: dt.INTEGER,
        primaryKey: true,
    },
    totalSessions: {
        type: dt.INTEGER,
        defaultValue: 0,
    },
    totalPoints: {
        type: dt.INTEGER,
        defaultValue: 0,
    }

}, {
    tableName: "ReviewHistory",
    timestamps: true
})

export { ReviewHistoryModel }