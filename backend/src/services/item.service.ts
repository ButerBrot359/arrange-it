import { ItemRepository } from "../repositories/item.repository";
import type { Item, CreateItemDto } from "../types/item";

export class ItemService {
  private itemRepository = new ItemRepository();

  async create(dto: CreateItemDto): Promise<Item> {
    return this.itemRepository.create(dto);
  }

  async getAll(): Promise<Item[]> {
    return this.itemRepository.findAll();
  }
}
