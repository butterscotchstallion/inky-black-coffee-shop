import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FancyButton from '../fancy-button/FancyButton';
import { CART_ITEM_QTY_LIMIT, CartItem, addItem } from './cart.slice';

interface AddToCartProps {
  item: CartItem;
}

export default function AddToCartButton({ item }: AddToCartProps) {
  const dispatch = useDispatch();
  const qtyLimits: any = {};
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {}, []);

  function onClick() {
    if (!(Number(item.id) in qtyLimits)) {
      qtyLimits[item.id] = 1;
    }

    if (qtyLimits[item.id] < CART_ITEM_QTY_LIMIT) {
      qtyLimits[item.id]++;
      dispatch(addItem(item));
    } else {
      setDisabled(true);
    }
  }

  return (
    <FancyButton
      className={disabled ? 'disabled' : ''}
      disabled={disabled}
      onClick={onClick}
    ></FancyButton>
  );
}
