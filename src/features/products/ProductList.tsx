import { Grid, Alert } from '@mui/material';
import { CartItem } from '../cart/cart.slice';
import Product from './Product';
import { Item } from '../grid/Item';
import { useGetProductsQuery } from './productsApi';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProductList({ theme }: any) {
  /*const items: CartItem[] = [
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
  ];*/
  const { data: items = [], error, isLoading } = useGetProductsQuery();

  return (
    <Grid container spacing={3} flexDirection='row'>
      <Grid item xs={12} className='products-grid'>
        <Item theme={theme} fullheight='true'>
          <h2>Products</h2>
          <Grid container>
            {items.map((allItem: CartItem) => (
              <Grid item xs={4} key={allItem.id}>
                <Product item={allItem} />
              </Grid>
            ))}
          </Grid>

          {isLoading ? <CircularProgress /> : ''}
          {error ? (
            <Alert severity='error'>
              There was a problem loading products.
            </Alert>
          ) : (
            ''
          )}
        </Item>
      </Grid>
    </Grid>
  );
}
