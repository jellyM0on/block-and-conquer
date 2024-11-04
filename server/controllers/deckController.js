import { Deck } from "../models/Deck.js";
import asyncHandler from "../utils/asyncHandler.js";
import { sequelize } from "../config/database.js";

const getDecks = asyncHandler(async(req, res, next) => {
    await sequelize.sync()
    const decks = await Deck.findAll({
        where: {
            privacy: "Public"
        }
    }); 
    res.status(200).json(decks); 
});

const getUserDecks = asyncHandler(async(req, res) => {
    const { userId } = req.params;
    const decks = await Deck.find({
        where: {
            userId : userId
        }
    }); 
    res.status(200).json(decks); 
});

const getDeck = asyncHandler(async(req, res) => {
    const { deckId } = req.params;
    const deck = await Deck.findOne({
        where: {
            id: deckId
        }
    })
    res.status(200).json(deck);
})

const createDeck = asyncHandler(async(req, res) => {
    const { deckData } = req.params; 
    const deck = Deck.build(deckData); 
    deck.validate(); 
    await deck.save();
    res.status(200).json(deck);
})

const updateDeck = asyncHandler(async(req, res) => {
    const { deckId } = req.params; 
    const updatedFields = req.body; 
    const deck = await Deck.update(updatedFields, {
        where: {
            id: deckId
        }
    })
    res.status(200).json(deck);
})

const deleteDeck = asyncHandler(async(req, res) => {
    const { deckId } = req.params;
    await Deck.destroy({
        where: {
            id: userId
        }
    })
    res.status(200);
})

export { getDecks, getUserDecks, getDeck, createDeck, updateDeck, deleteDeck }