import { Router } from "express"; 
import authRouter from "./auth.js"; 
import requireAuth from "../middlewares/requireAuth.js";
import deckRouter from "./decks.js";
import cardRouter from "./cards.js";
import collabRouter from "./collaborator.js";

const router = Router(); 

router.use(authRouter); 

// router.use(requireAuth); 

router.use(deckRouter);
router.use(cardRouter);
router.use(collabRouter); 

export default router; 