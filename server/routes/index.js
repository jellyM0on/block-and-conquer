import { Router } from "express"; 
import authRouter from "./auth.js"; 
import deckRouter from "./decks.js"

const router = Router(); 

router.use(authRouter); 
router.use(deckRouter); 

export default router; 