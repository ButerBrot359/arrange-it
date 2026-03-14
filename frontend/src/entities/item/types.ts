export interface Item {
  id: number;
  title: string;
  description: string | null;
  created_at: string;
}

export interface CreateItemDto {
  title: string;
  description?: string;
}
