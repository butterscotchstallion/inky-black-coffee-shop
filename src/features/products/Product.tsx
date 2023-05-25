import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import AddToCartButton from '../cart/AddToCartButton';
import './product.scss';

export default function Product({ item }: any) {
  return (
    <Card key={item.id} variant='outlined' className='product-card'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {item.name[0]}
          </Avatar>
        }
        title={item.name}
        subheader={'$' + item.price}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container justifyContent='flex-end'>
          <AddToCartButton item={item} />
        </Grid>
      </CardActions>
    </Card>
  );
}
