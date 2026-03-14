import { Router } from "express";
import { ItemController } from "../controllers/item.controller";

const router = Router();
const itemController = new ItemController();

router.get("/items", itemController.getAll);
router.post("/items", itemController.create);

export default router;
