import express from "express";
import { conquestController } from "../controllers/conquestController.js";

const router = express.Router(); 

router.get("/api/conquests", conquestController.getAll);

router.get("/api/conquests/:conquestId", conquestController.get);

export default router; 