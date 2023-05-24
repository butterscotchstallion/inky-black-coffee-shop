import DeleteIcon from '@mui/icons-material/Delete';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import './cart-contents.scss';
import { CartItem } from './cart.slice';
import { removeItem } from './cart.actions';

export default function CartContents() {
  const subtotal = useSelector((state: RootState) => state.cart.subtotal);
  const items: CartItem[] = useSelector((state: RootState) => {
    return state.cart.items;
  });
  const dispatch = useDispatch();

  function onDeleteClicked(itemId: number) {
    dispatch(removeItem(itemId));
  }

  return (
    <section>
      <h4>Cart</h4>
      {items.length > 0 ? (
        <TableContainer>
          <Table className='cart-contents-table'>
            <TableBody>
              {items.map((item: CartItem) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell width='5%'>
                    <IconButton
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
                <TableCell align='right' colSpan={2}>
                  <strong>{subtotal}</strong>
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
