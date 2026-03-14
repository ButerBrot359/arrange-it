import { useQuery } from '@tanstack/react-query';
import { getItems } from '@/entities/item';
import { CreateItemForm } from '@/features/create-item';

export function HomePage() {
  const { data: items, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
  });

  return (
    <div>
      <h1>arrange-it</h1>
      <CreateItemForm />
      <hr style={{ margin: '16px 0' }} />
      {isLoading && <p>Loading...</p>}
      {items?.map((item) => (
        <div key={item.id} style={{ marginBottom: '12px' }}>
          <strong>{item.title}</strong>
          {item.description && <p style={{ margin: '4px 0 0' }}>{item.description}</p>}
        </div>
      ))}
      {items?.length === 0 && <p>No items yet</p>}
    </div>
  );
}
