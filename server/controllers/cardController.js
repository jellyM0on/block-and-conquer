import { Card } from "../models/Card.js";
import asyncHandler from "../utils/asyncHandler.js";


const getCards = asyncHandler(async(req, res) => {
    const { deckId } = req.params;
    const cards = await Card.findAll({
        where: {
            deckId: deckId
        }
    }); 
    res.status(200).json(cards); 
});

const getCard = asyncHandler(async(req, res) => {
    const { cardId, deckId } = req.params;
    const card = await Card.findOne({
        where: {
            id: cardId,
            deckId: deckId
        }
    }); 
    res.status(200).json(cards); 
});

const createCard = asyncHandler(async(req, res) => {
    const { cardData } = req.body; 
    const card = Card.build(cardData); 
    card.validate(); 
    await card.save();
    res.status(200).json(card);
});

const updateCard = asyncHandler(async(req, res) => {
    const { cardId, deckId } = req.params; 
    const updatedFields = req.body; 
    const card = await Card.update(updatedFields, {
        where: {
            id: cardId,
            deckId: deckId
        }
    })
    res.status(200).json(card);
});

const deleteCard = asyncHandler(async(req, res) => {
    const { cardId, deckId } = req.params;
    await Card.destroy({
        where: {
            id: cardId,
            deckId: deckId
        }
    })
    res.status(200);
}); 

export { getCards, getCard, createCard, updateCard, deleteCard }
