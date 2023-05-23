import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import AddToCartButton from '../cart/AddToCartButton';
import { CartItem } from '../cart/cart.slice';
import { Item } from '../grid/Item';
import Product from './Product';

interface ProductListParams {
  items: CartItem[];
  theme: any;
}

export default function ProductList({ theme, items }: ProductListParams) {
  return (
    <Grid container spacing={3} gap={3}>
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
