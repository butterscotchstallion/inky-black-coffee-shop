import { useSelector } from 'react-redux';

import './App.css';
import AddToCartButton from './features/cart/AddToCartButton';
import { CartItem } from './features/cart/cart.slice';
import { RootState } from './store';
import { useEffect } from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import theme from './theme';

function App() {
  useEffect(() => {
    document.title = 'Inky Black Coffee Shop';
  }, []);
  const items = useSelector((state: RootState) => {
    return state.cart.items;
  });
  const item = {
    id: 1,
    price: 0.99,
    name: 'Black Coffee',
  };
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <Grid
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          {items.length > 0 ? (
            <ul>
              {items.map((item: CartItem) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          ) : (
            'No items in cart'
          )}
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          <AddToCartButton item={item} />
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
