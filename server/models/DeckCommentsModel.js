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
}, {
    tableName: "Comments",
    timestamps: true
})

export { DeckCommentsModel }