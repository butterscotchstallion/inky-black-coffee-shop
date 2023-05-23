import { Box, Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import './app.css';
import CartContents from './features/cart/CartContents';
import { CartItem } from './features/cart/cart.slice';
import { Item } from './features/grid/Item';
import ProductList from './features/products/ProductList';
interface AppProps {
  theme: any;
}
function App({ theme }: AppProps) {
  useEffect(() => {
    document.title = 'Inky Black Coffee Shop';
  }, []);

  const allItems: CartItem[] = [
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
    <Box
      component='main'
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
        <Grid container>
          <Grid item xs={12}>
            <Item theme={theme}>
              <h1>Inky Black Coffee Shop</h1>
            </Item>
          </Grid>

          <Grid item xs={2}>
            <Item theme={theme}>
              <CartContents />
            </Item>
          </Grid>

          <Grid item xs={8}>
            <ProductList theme={theme} items={allItems} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
