import { DataTypes as dt } from "sequelize";
import { sequelize } from "../config/database.js";

const CardModel = sequelize.define("Card", {
    id: {
        type: dt.INTEGER,
        primaryKey: true,
        unique: true
    },
    deckId : {
        type: dt.INTEGER,
    }, 
    type : {
        type: dt.STRING,
    }, 
    question : {
        type: dt.STRING,
    }, 
    answer : {
        type: dt.STRING,
    }, 
    choices : {
        type: dt.STRING,
    }, 
    order : {
        type: dt.INTEGER,
    }, 
    lastReviewed : {
        type: dt.DATE,
    }, 
    dateDue : {
        type: dt.DATE,
    },
    stability : {
        type: dt.INTEGER,
    },
    difficulty : {
        type: dt.INTEGER,
    },
    scheduledDay : {
        type: dt.DATE,
    },
    reps : {
        type: dt.INTEGER,
    },
    lapses : {
        type: dt.INTEGER,
    },
    state : {
        type: dt.STRING,
    },
}, {
    tableName: "Cards",
    timestamps: true
})

export { CardModel }