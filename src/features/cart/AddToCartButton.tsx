import { useDispatch } from 'react-redux';
import FancyButton from '../fancy-button/FancyButton';
import { CartItem, addItem } from './cart.slice';

interface AddToCartProps {
  item: CartItem;
}

export default function AddToCartButton({ item }: AddToCartProps) {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(addItem(item));
  }

  return <FancyButton onClick={onClick}>Add To Cart</FancyButton>;
}
