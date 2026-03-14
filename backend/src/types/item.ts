export interface Item {
  id: number;
  title: string;
  description: string | null;
  created_at: Date;
}

export interface CreateItemDto {
  title: string;
  description?: string;
}
