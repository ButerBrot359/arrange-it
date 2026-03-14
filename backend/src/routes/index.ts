import { Router } from "express";
import healthRoutes from "./health.routes";
import itemRoutes from "./item.routes";

const router = Router();

router.use(healthRoutes);
router.use(itemRoutes);

export default router;
