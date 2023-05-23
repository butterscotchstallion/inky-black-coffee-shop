import { useEffect } from 'react';
import AddToCartButton from './features/cart/AddToCartButton';
import CartContents from './features/cart/CartContents';
import { CartItem } from './features/cart/cart.slice';
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Container,
  Typography,
  Avatar,
  IconButton,
  Box,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './app.css';
import { red } from '@mui/material/colors';

function App() {
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
            Header
          </Grid>

          <Grid item xs={2}>
            <CartContents />
          </Grid>

          <Grid item xs={8}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                {allItems.map((allItem: CartItem) => (
                  <Card key={allItem.id} variant='outlined'>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                          {allItem.name[0]}
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label='settings'>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={allItem.name}
                      subheader={'$' + allItem.price}
                    />
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color='text.secondary'
                        gutterBottom
                      >
                        {allItem.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <AddToCartButton item={allItem} />
                    </CardActions>
                  </Card>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
