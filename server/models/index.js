import { sequelize } from "../config/database.js";
import { UserModel as User } from "./UserModel.js";
import { DeckModel as Deck } from "./DeckModel.js";
import { CardModel as Card } from "./CardModel.js";
import { CollaboratorModel as Collaborator} from "./CollaboratorModel.js";
import { DeckCommentsModel as DeckComment } from "./DeckCommentsModel.js";
import { ConquestModel as Conquest } from "./ConquestModel.js";
import { ConquestProgModel as ConquestProg } from "./ConquestProgModel.js";

//define relationships 

User.hasMany(Deck, {foreignKey: "userId", as: "decks"}); 
Deck.belongsTo(User, {foreignKey: "userId", as: "user"}); 

Deck.hasMany(Card, {foreignKey: "deckId", as: "cards"});
Card.belongsTo(Deck, {foreignKey: "deckId", as: "deck"}); 

Deck.belongsToMany(User, { through: "Collaborators" });
User.belongsToMany(Deck, { through: "Collaborators" });

Deck.hasMany(DeckComment, {foreignKey: "deckId", as: "comments"}); 
DeckComment.belongsTo(Deck, {foreignKey: "deckId", as: "deck"}); 

User.belongsToMany(Conquest, { through: "ConquestProgs", foreignKey: "userId", otherKey: "conquestId"}); 
Conquest.belongsToMany(User, { through: "ConquestProgs", foreignKey: "conquestId", otherKey: "userId"}); 


export { User, Deck, Card, Collaborator, DeckComment, Conquest, ConquestProg }

