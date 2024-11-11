import { Collaborator } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";

const getCollaborators = asyncHandler(async(req, res) => {
    const { deckId } = req.params;
    const collaborators = await Collaborator.findAll({
        where: {
            deckId: deckId
        }
    }); 
    res.status(200).json(collaborators); 
});

const getCollaborations = asyncHandler(async(req, res) => {
    const { userId } = req.params;
    const collaborations = await Collaborator.findAll({
        where: {
            userId: userId
        }
    }); 
    res.status(200).json(collaborations); 
});

const createCollaboration = asyncHandler(async(req, res) => {
    const { collaborationData } = req.body; 
    const collaboration = Collaborator.build(collaborationData); 
    collaboration.validate(); 
    await collaboration.save();
    res.status(200).json(collaboration);
});

const updateCollaboration = asyncHandler(async(req, res) => {
    const { userId, deckId } = req.params; 
    const updatedFields = req.body; 
    const collaboration = await Collaborator.update(updatedFields, {
        where: {
            userId: userId,
            deckId: deckId
        }
    })
    res.status(200).json(collaboration);
});

const deleteCollaboration = asyncHandler(async(req, res) => {
    const { userId, deckId } = req.params;
    await Collaborator.destroy({
        where: {
            userId: userId,
            deckId: deckId
        }
    })
    res.status(200);
}); 

export { getCollaborations, getCollaborators, createCollaboration, updateCollaboration, deleteCollaboration }


