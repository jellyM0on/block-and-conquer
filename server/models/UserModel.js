import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const UserModel = sequelize.define("User", {
    id: {
        type: dt.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
    },
    email: {
        type: dt.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    hash: {
        type: dt.STRING,
        allowNull: false,
    },
    username: {
        type: dt.STRING,
        allowNull: false
    },
    interests: {
        type: dt.ARRAY(dt.STRING),
    },
    avatarID: {
        type: dt.INTEGER,
        defaultValue: 0
    },
    points: {
        type: dt.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    tokens: {
        type: dt.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    dailyPoints: {
        type: dt.INTEGER,
        defaultValue: 0
    },
    dailyTokens: {
        type: dt.INTEGER,
        defaultValue: 0
    },
    currentStreak: {
        type: dt.INTEGER,
        defaultValue: 0
    },
    bestStreak: {
        type: dt.INTEGER,
        defaultValue: 0
    },
    rewardsProgress: {
        type: dt.INTEGER,
        defaultValue: 0
    },
    pomodoroTime: {
        type: dt.TIME,
    },
    pomodoroBreak: {
        type: dt.TIME,
    },
    autoStartBreakStatus: {
        type: dt.BOOLEAN,
        defaultValue: true
    },
    autoStartPomodoroStatus: {
        type: dt.BOOLEAN,
        defaultValue: true
    },
    ambientMusic: {
        type: dt.STRING,
        defaultValue: "m1"
    },
    reminderMode: {
        type: dt.BOOLEAN,
        defaultValue: true
    },
    reminderTime: {
        type: dt.TIME,
    },
    totalSessions: {
        type: dt.INTEGER,
        defaultValue: 0,
    },
    totalTime: {
        type: dt.TIME
    },
    totalBreaks: {
        type: dt.INTEGER,
        defaultValue: 0
    }

}, {
    tableName: "Users",
    timestamps: true
})

export { UserModel }