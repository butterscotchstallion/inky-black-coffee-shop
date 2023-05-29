import { Box, Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import './app.css';
import CartContents from './features/cart/CartContents';
import { Item } from './features/grid/Item';
import ProductList from './features/products/ProductList';
interface AppProps {
  theme: any;
}
function App({ theme }: AppProps) {
  useEffect(() => {
    document.title = 'Inky Black Coffee Shop';
  }, []);

  return (
    <Box
      component='main'
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
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
        </Grid>

        <Grid container>
          <Grid item xs={9}>
            <ProductList />
          </Grid>

          <Grid item xs={3}>
            <CartContents />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
