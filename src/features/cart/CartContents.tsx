import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CartItem } from './cart.slice';
import { Table, TableCell, TableBody, TableRow } from '@mui/material';

export default function CartContents() {
  const subtotal = useSelector((state: RootState) => state.cart.subtotal);
  const items: CartItem[] = useSelector((state: RootState) => {
    return state.cart.items;
  });

  return items.length ? (
    <Table>
      <TableBody>
        {items.map((item: CartItem) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell>
            <strong>Subtotal</strong>
          </TableCell>
          <TableCell>{subtotal}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ) : (
    <span>No items in cart</span>
  );
}
