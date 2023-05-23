import { useDispatch } from 'react-redux';
import { CartItem, addItem } from './cart.slice';

interface AddToCartProps {
  item: CartItem;
}

export default function AddToCartButton({ item }: AddToCartProps) {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(addItem(item));
  }

  return (
    <button type='button' onClick={onClick}>
      Add to cart
    </button>
  );
}
