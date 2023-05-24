import { Grid } from '@mui/material';
import { CartItem } from '../cart/cart.slice';
import Product from './Product';
import { Item } from '../grid/Item';

export default function ProductList({ theme }: any) {
  const items: CartItem[] = [
    {
      id: 1,
      price: 0.99,
      name: 'Black Coffee',
      description: 'Plain black coffee',
    },
    {
      id: 2,
      price: 4.99,
      name: 'Cheesy Omelet',
      description: 'Omelet with our secret three cheese blend',
    },
    {
      id: 3,
      price: 1.99,
      name: 'Cold Brew',
      description: 'Strong and delicious cold brew',
    },
    {
      id: 4,
      price: 3.99,
      name: 'Double Cheesy Bacon Amalgamation',
      description: 'Much bacon many cheese',
    },
  ];

  return (
    <Grid container spacing={3} flexDirection='row'>
      <Grid item xs={4}>
        <Item theme={theme}>
          {items.map((allItem: CartItem) => (
            <Product key={allItem.id} item={allItem} />
          ))}
        </Item>
      </Grid>
    </Grid>
  );
}
