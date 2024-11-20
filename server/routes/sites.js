import express from "express";
import { sitesController } from "../controllers/sitesController.js";

const router = express.Router();

router.post("/api/sites/:userId", sitesController.create); // working
router.get("/api/sites/:userId", sitesController.getAll); // working
router.put("/api/sites/:userId/:siteId", sitesController.update); // working
router.delete("/api/sites/:userId/:siteId", sitesController.delete); // working

export default router;