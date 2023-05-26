import { useDispatch } from 'react-redux';
import FancyButton from '../fancy-button/FancyButton';
import { CART_ITEM_QTY_LIMIT, CartItem, addItem } from './cart.slice';
import { useEffect, useState } from 'react';
import { store } from '../../store';
import { Action, addListener } from '@reduxjs/toolkit';

interface AddToCartProps {
  item: CartItem;
}

export default function AddToCartButton({ item }: AddToCartProps) {
  const dispatch = useDispatch();
  const qtyLimits: any = {};
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = store.dispatch(
      addListener({
        predicate: (action, currentState) => {
          return true;
        },
        effect: (action: Action, listenerApi: ListenerApi) => {
          console.log('item deleted ' + action);
        },
      })
    );

    return function cleanup() {
      //unsubscribe();
    };
  }, []);

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
    >
      Add To Cart
    </FancyButton>
  );
}
