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
    <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
      <Grid>
        <Grid item xs={12}>
          Header
        </Grid>

        <Grid>
          <CartContents />
        </Grid>

        <Grid item>
          <Grid item xs={2}>
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
    </Container>
  );
}

export default App;
