import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const DeckModel = sequelize.define("Deck", {
    id: {
        type: dt.INTEGER,
        primaryKey: true,
        unique: true
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
    subject: {
        type: dt.STRING,
    },
    progress: {
        type: dt.FLOAT,
    },
    reviewStatus: {
        type: dt.STRING,
        validate: {
            isIn: [["Reviewed", "In-Progress", "Pending"]]
        }
    },
    publishedStatus: {
        type: dt.STRING,
        validate: {
            isIn: [["Published", "Draft"]]
        }
    },
    lastReviewed: {
        type: dt.DATE,
    },
    privacy: {
        type: dt.STRING,
        validate: {
            isIn: [["Public", "Private"]]
        }
    },
    lastEditedDate: {
        type: dt.DATE,
    },
    lastEditedBy: {
        type: dt.INTEGER,
    },
    views: {
        type: dt.INTEGER,
    }
}, {
    tableName: "Decks",
    timestamps: true
})

export { DeckModel }