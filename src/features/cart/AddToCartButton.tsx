import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { store } from '../../store';
import FancyButton from '../fancy-button/FancyButton';
import { CartItem, addItem, selectAddToCartDisabled } from './cart.slice';

interface AddToCartProps {
  item: CartItem;
}

export default function AddToCartButton({ item }: AddToCartProps) {
  const dispatch = useDispatch();
  const disabled = selectAddToCartDisabled(store.getState(), item.id);
  const [clicks, setClicks] = useState<number>(0);
  function onClick() {
    dispatch(addItem(item));
    const numClicks = clicks + 1;
    setClicks(numClicks);
  }

  return (
    <FancyButton
      className={disabled ? 'disabled' : ''}
      disabled={disabled}
      onClick={onClick}
    ></FancyButton>
  );
}
