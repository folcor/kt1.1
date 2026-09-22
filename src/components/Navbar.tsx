import { useCartStore } from '../store/cartStore';
import type { CartState } from '../store/cartStore'; // <--- Добавьте эту строку

export function Navbar() {
  const count = useCartStore((state: CartState) => 
    state.items.reduce((sum: number, i) => sum + i.quantity, 0)
  );
  const total = useCartStore((state: CartState) => state.totalSum());

  return (
    <header className="navbar">
      <h1>Каталог товаров</h1>
      <div className="cart-info">
        <span>корзина: {count}</span>
        <span>Итого: {total} ₽</span>
      </div>
    </header>
  );
}