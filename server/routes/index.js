import { Router } from "express"; 

import  requireAuth  from "../middlewares/requireAuth.js";
import deckRouter from "./decks.js";
import cardRouter from "./cards.js";
import collabRouter from "./collaborator.js";
import deckCommentRouter from "./deckComments.js";
import userRouter from "./user.js";
import friendsRouter from "./friends.js";

const router = Router(); 

//router.use(requireAuth); 

router.use(deckRouter);
router.use(cardRouter);
router.use(collabRouter); 
router.use(deckCommentRouter); 
router.use(userRouter);
router.use(friendsRouter);

export default router; 