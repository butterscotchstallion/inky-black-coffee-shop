import DeleteIcon from '@mui/icons-material/Delete';
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import './cart-contents.scss';
import { removeItem } from './cart.actions';
import { CART_ITEM_QTY_LIMIT, CartItem, setItemQuantity } from './cart.slice';

export default function CartContents() {
  const subtotal = useSelector((state: RootState) => state.cart.subtotal);
  const items: CartItem[] = useSelector((state: RootState) => {
    return state.cart.items;
  });
  const quantities: number[] = [];
  for (let j = 1; j <= CART_ITEM_QTY_LIMIT; j++) {
    quantities.push(j);
  }
  const dispatch = useDispatch();

  function onDeleteClicked(itemId: number) {
    dispatch(removeItem(itemId));
  }

  function handleQuantityChange(e: any, item: CartItem) {
    const qty = e.target.value;

    if (qty > 0) {
      dispatch(
        setItemQuantity({
          itemId: item.id,
          quantity: qty,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  }

  return (
    <section>
      <h2>Cart</h2>
      {items.length > 0 ? (
        <TableContainer>
          <Table className='cart-contents-table'>
            <TableBody>
              {items.map((item: CartItem) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell width='15%'>
                    <FormControl>
                      <Select
                        labelId='qty-label'
                        id='qty-select'
                        value={item.quantity}
                        label='Quantity'
                        onChange={(e) => handleQuantityChange(e, item)}
                      >
                        {quantities.map((q: number) => (
                          <MenuItem key={q} value={q}>
                            {q}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell width='5%'>
                    <IconButton
                      className='cart-delete-button'
                      onClick={() => onDeleteClicked(item.id)}
                      title='Remove item'
                      aria-label='delete'
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <strong>Subtotal</strong>
                </TableCell>
                <TableCell align='right' colSpan={3}>
                  <strong>${subtotal}</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <span>No items in cart</span>
      )}
    </section>
  );
}
