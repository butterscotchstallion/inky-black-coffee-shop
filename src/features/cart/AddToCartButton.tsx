import { useDispatch } from 'react-redux';
import FancyButton from '../fancy-button/FancyButton';
import { CART_ITEM_QTY_LIMIT, CartItem, addItem } from './cart.slice';

interface AddToCartProps {
  item: CartItem;
}

export default function AddToCartButton({ item }: AddToCartProps) {
  const dispatch = useDispatch();
  const qtyLimits: any = {};

  function onClick() {
    if (!(Number(item.id) in qtyLimits)) {
      qtyLimits[item.id] = 1;
    }

    if (item.quantity < CART_ITEM_QTY_LIMIT) {
      dispatch(addItem(item));
    }
  }

  return <FancyButton onClick={onClick}>Add To Cart</FancyButton>;
}
