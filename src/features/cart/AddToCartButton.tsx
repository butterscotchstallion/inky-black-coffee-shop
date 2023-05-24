import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FancyButton from '../fancy-button/FancyButton';
import { CartItem, addItem } from './cart.slice';

interface AddToCartProps {
  item: CartItem;
}

export default function AddToCartButton({ item }: AddToCartProps) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState<boolean>(false);

  function onClick() {
    dispatch(addItem(item));
    setDisabled(false);
  }

  return (
    <FancyButton disabled={disabled} onClick={onClick}>
      Add To Cart
    </FancyButton>
  );
}
