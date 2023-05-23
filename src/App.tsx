import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ColorModeScript,
  SimpleGrid,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import AddToCartButton from './features/cart/AddToCartButton';
import CartContents from './features/cart/CartContents';
import { CartItem } from './features/cart/cart.slice';
import theme from './theme';

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
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <CartContents />
        </Box>
        <Box>
          <SimpleGrid
            spacing={4}
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
          >
            {allItems.map((allItem: CartItem) => (
              <Card key={allItem.id}>
                <CardHeader>
                  {allItem.name} (${allItem.price})
                </CardHeader>
                <CardBody>{allItem.description}</CardBody>
                <CardFooter>
                  <AddToCartButton item={allItem} />
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
