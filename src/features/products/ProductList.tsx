import { Grid, Alert } from '@mui/material';
import { CartItem } from '../cart/cart.slice';
import Product from './Product';
import { Item } from '../grid/Item';
import { useGetProductsQuery } from './productsApi';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProductList({ theme }: any) {
  const { data: items = [], error, isLoading } = useGetProductsQuery();

  return (
    <Grid container spacing={3} flexDirection='row'>
      <Grid item xs={12} className='products-grid'>
        <Item theme={theme} fullheight='true'>
          <h2>Products</h2>
          <Grid container spacing={2}>
            {items.map((allItem: CartItem) => (
              <Grid key={allItem.id} item xs={4}>
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
