import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createItem } from '@/entities/item';

export function CreateItemForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      setTitle('');
      setDescription('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    mutation.mutate({ title: title.trim(), description: description.trim() || undefined });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" disabled={mutation.isPending || !title.trim()}>
        {mutation.isPending ? 'Saving...' : 'Save'}
      </button>
      {mutation.isError && <p style={{ color: 'red' }}>Error saving</p>}
    </form>
  );
}
