import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/authMiddleware.js";
import { getStats } from "../controllers/statController.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, getStats);

export default router;