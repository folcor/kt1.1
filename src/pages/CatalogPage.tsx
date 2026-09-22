import { useFetch } from '../hooks/useFetch';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types/product';

const API_URL = 'https://fakestoreapi.com/products';

export function CatalogPage() {
  const { data, loading, error } = useFetch<Product[]>(API_URL);

  if (loading) return <p className="status">Загрузка…</p>;
  if (error) return <p className="status error">Ошибка: {error}</p>;
  if (!data) return <p className="status">Нет данных</p>;

  return (
    <div className="catalog">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}