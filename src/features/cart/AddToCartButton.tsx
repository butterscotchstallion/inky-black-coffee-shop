import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { CartItem, addItem } from './cart.slice';
import { useState } from 'react';

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
    <Button disabled={disabled} onClick={onClick}>
      Add to cart
    </Button>
  );
}
