import { apiRequest } from '@/shared/api';
import type { Item, CreateItemDto } from './types';

export function getItems() {
  return apiRequest<Item[]>('/items');
}

export function createItem(dto: CreateItemDto) {
  return apiRequest<Item>('/items', {
    method: 'POST',
    body: JSON.stringify(dto),
  });
}
