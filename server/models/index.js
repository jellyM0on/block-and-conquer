import { sequelize } from "../config/database.js";
import { User as UserModel } from "./User.js";
import { Deck as DeckModel } from "./Deck.js";

const User = UserModel(sequelize); 
const Deck =  DeckModel(sequelize); 

User.hasMany(FlashcardDeck, {ForeignKey: "userId", as: "flashcard_deck"}); 
Deck.belongsTo(User, {ForeignKey: "userId", as: "user"}); 


