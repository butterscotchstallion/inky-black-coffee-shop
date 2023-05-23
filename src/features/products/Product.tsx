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

export default function Product({ item }: any) {
  return (
    <Card key={item.id} variant='outlined'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {item.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={item.name}
        subheader={'$' + item.price}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <AddToCartButton item={item} />
      </CardActions>
    </Card>
  );
}
