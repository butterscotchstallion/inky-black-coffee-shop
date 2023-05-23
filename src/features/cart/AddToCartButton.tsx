import { Button } from '@chakra-ui/react';
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
    <Button colorScheme='blue' onClick={onClick}>
      Add to cart
    </Button>
  );
}
