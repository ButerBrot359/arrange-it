import pool from "../config/db";
import type { Item, CreateItemDto } from "../types/item";

export class ItemRepository {
  async create(dto: CreateItemDto): Promise<Item> {
    const { rows } = await pool.query<Item>(
      "INSERT INTO items (title, description) VALUES ($1, $2) RETURNING *",
      [dto.title, dto.description ?? null]
    );
    return rows[0];
  }

  async findAll(): Promise<Item[]> {
    const { rows } = await pool.query<Item>(
      "SELECT * FROM items ORDER BY created_at DESC"
    );
    return rows;
  }
}
