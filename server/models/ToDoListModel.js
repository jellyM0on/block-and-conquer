import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const ToDoListModel = sequelize.define("ToDoList", {
    listItemId: {
        type: dt.INTEGER,
        primaryKey: true,
    },
    userId: {
        type: dt.INTEGER,
    },
    description: {
        type: dt.STRING,
    },
    tags: {
        type: dt.STRING,
    },
    dueDate: {
        type: dt.DATE,
    },
    status: {
        type: dt.STRING,
        validate: {
            isIn: [["Active", "Inactive"]]
        }
    }

}, {
    tableName: "ToDoList",
    timestamps: true
})

export { ToDoListModel }