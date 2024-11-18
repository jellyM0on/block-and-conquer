import { sequelize } from "../config/database.js";
import { UserModel as User } from "./UserModel.js";
import { ReviewHistoryModel as ReviewHistory } from "./ReviewHistoryModel.js";
import { SitesModel as Sites } from "./SitesModel.js";
import { FriendsModel as Friends } from "./FriendsModel.js";
import { ProfileItemsModel as ProfileItems } from "./ProfileItemsModel.js";
import { ToDoListModel as ToDoList } from "./ToDoListModel.js";

import { DeckModel as Deck } from "./DeckModel.js";
import { CardModel as Card } from "./CardModel.js";
import { CollaboratorModel as Collaborator} from "./CollaboratorModel.js";
import { DeckCommentsModel as DeckComment } from "./DeckCommentsModel.js";

//define relationships 

User.hasMany(Deck, {foreignKey: "userId", as: "decks"}); 
Deck.belongsTo(User, {foreignKey: "userId", as: "user"}); 

Deck.hasMany(Card, {foreignKey: "deckId", as: "cards"});
Card.belongsTo(Deck, {foreignKey: "deckId", as: "deck"}); 

Deck.belongsToMany(User, { through: "Collaborators" });
User.belongsToMany(Deck, { through: "Collaborators" });

Deck.hasMany(DeckComment, {foreignKey: "deckId", as: "comments"}); 
DeckComment.belongsTo(Deck, {foreignKey: "deckId", as: "deck"}); 

User.hasMany(ReviewHistory, {foreignKey: "userId", as: "reviewhistory"});
ReviewHistory.belongsTo(User, {foreignKey: "userId", as: "user"});

User.hasMany(Sites, {foreignKey: "userId", as: "sites"});
Sites.belongsTo(User, {foreignKey: "userId", as: "user"}); 

User.hasMany(Friends, {foreignKey: "userId_1", as: "addedFriends"});
Friends.belongsTo(User, {foreignKey: "userId_1", as: "userAdded"});

User.hasMany(Friends, {foreignKey: "userId_2", as: "acceptedFriends"});
Friends.belongsTo(User, {foreignKey: "userId_2", as: "userAccepted"});

ProfileItems.hasMany(User, {foreignKey: "avatarId", as: "userAvatar"});
User.belongsTo(ProfileItems, {foreignKey: "avatarId", as: "avatar" });

User.hasMany(ToDoList, {foreignKey: "userId", as: "ToDoListItem"});
ToDoList.belongsTo(User, {foreignKey: "userId", as: "user"});

export { User, Deck, Card, Collaborator, DeckComment, ReviewHistory, Sites, Friends, ProfileItems, ToDoList }

