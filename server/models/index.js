import { sequelize } from "../config/database.js";
import { UserModel as User } from "./UserModel.js";
import { DeckModel as Deck } from "./DeckModel.js";
import { CardModel as Card } from "./CardModel.js";
import { CollaboratorModel as Collaborator} from "./CollaboratorModel.js";

//define relationships 

User.hasMany(Deck, {foreignKey: "userId", as: "decks"}); 
Deck.belongsTo(User, {foreignKey: "userId", as: "user"}); 

Deck.hasMany(Card, {foreignKey: "deckId", as: "cards"});
Card.belongsTo(Deck, {foreignKey: "deckId", as: "deck"}); 

Deck.belongsToMany(User, { through: "Collaborators" });
User.belongsToMany(Deck, { through: "Collaborators" });

export { User, Deck, Card, Collaborator }

