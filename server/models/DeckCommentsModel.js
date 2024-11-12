import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const DeckCommentsModel = sequelize.define("DeckComments", {
    id: {
        type: dt.INTEGER,
        primaryKey: true,
        unique: true
    },
    userId: {
        type: dt.INTEGER,
    },
    deckId: {
        type: dt.INTEGER,
    },
    text: {
        type: dt.STRING,
    }, 
    referenceId: {
        type: dt.INTEGER,
    },
    createdAt: {
        type: dt.DATE,
    },
    updatedAt: {
        type: dt.DATE
    }
}, {
    tableName: "Comments",
    timestamps: true
})

export { DeckCommentsModel }