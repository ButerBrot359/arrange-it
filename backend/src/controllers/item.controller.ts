import type { Request, Response } from "express";
import { ItemService } from "../services/item.service";

export class ItemController {
  private itemService = new ItemService();

  create = async (req: Request, res: Response) => {
    const { title, description } = req.body;

    if (!title) {
      res.status(400).json({ error: "title is required" });
      return;
    }

    const item = await this.itemService.create({ title, description });
    res.status(201).json(item);
  };

  getAll = async (_req: Request, res: Response) => {
    const items = await this.itemService.getAll();
    res.json(items);
  };
}
