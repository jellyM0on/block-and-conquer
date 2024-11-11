import { sequelize } from "../config/database.js";
import { User as UserModel } from "./User.js";
import { Deck as DeckModel } from "./Deck.js";
import { Card as CardModel } from "./Card.js";
import { Collaborator as CollabModel } from "./Collaborator.js";

const User = UserModel(sequelize); 
const Deck =  DeckModel(sequelize); 

User.hasMany(FlashcardDeck, {foreignKey: "userId", as: "decks"}); 
Deck.belongsTo(User, {foreignKey: "userId", as: "user"}); 

const Card = CardModel(sequelize); 

Deck.hasMany(Card, {foreignKey: "deckId", as: "cards"});
Card.belongsTo(Deck, {foreignKey: "deckId", as: "deck"}); 

// const Collaborator = CollabModel(sequelize); 
Deck.belongsToMany(User, { through: "Collaborators" });
User.belongsToMany(Deck, { through: "Collaborators" });

