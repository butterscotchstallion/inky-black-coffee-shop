import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  TabPanel,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CartItem } from './cart.slice';

export default function CartContents() {
  const subtotal = useSelector((state: RootState) => state.cart.subtotal);
  const items: CartItem[] = useSelector((state: RootState) => {
    return state.cart.items;
  });

  return items.length ? (
    <TableContainer>
      <Table>
        <Tbody>
          {items.map((item: CartItem) => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>{item.price}</Td>
            </Tr>
          ))}
          <Tr>
            <Td>Subtotal</Td>
            <Td>{subtotal}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    <span>No items in cart</span>
  );
}
