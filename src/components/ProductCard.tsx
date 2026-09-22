import type { Product } from '../types/product';
import { useCartStore } from '../store/cartStore';
import type { CartState } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
const addItem = useCartStore((state: CartState) => state.addItem);
const removeItem = useCartStore((state: CartState) => state.removeItem);
const quantity = useCartStore(
  (state: CartState) => state.items.find((i) => i.id === product.id)?.quantity ?? 0
);

  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p>{product.price} ₽</p>
      <div className="card-actions">
        <button onClick={() => removeItem(product.id)} disabled={quantity === 0}>
          −
        </button>
        <span>В корзине: {quantity}</span>
        <button onClick={() => addItem(product)}>+</button>
      </div>
    </div>
  );
}