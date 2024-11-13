import express from "express";
import { conquestController } from "../controllers/conquestController.js";
import { conquestProgController } from "../controllers/conquestProgService.js";

const router = express.Router(); 

// get all conquests with user progress
router.get("/api/users/:userId/conquests", conquestController.getAllWithProgs);

// update a conquest progress
router.put("/api/users/:userId/conquests/:conquestId", conquestProgController.update); 


export default router; 