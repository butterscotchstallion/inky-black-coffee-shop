import { useSelector } from 'react-redux';

import './App.css';
import AddToCartButton from './features/cart/AddToCartButton';
import { CartItem } from './features/cart/cart.slice';
import { RootState } from './store';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Inky Black Coffee Shop';
  }, []);
  const items = useSelector((state: RootState) => {
    return state.cart.items;
  });
  const item = {
    id: 1,
    price: 0.99,
    name: 'Black Coffee',
  };
  return (
    <>
      <AddToCartButton item={item} />
      <section>
        {items.length > 0 ? (
          <ul>
            {items.map((item: CartItem) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          'No items in cart'
        )}
      </section>
    </>
  );
}

export default App;
