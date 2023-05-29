import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
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
        action={
          <Grid container justifyContent='flex-end' padding={1}>
            <AddToCartButton item={item} />
          </Grid>
        }
        title={item.name}
        subheader={'$' + item.price}
      />
      <CardContent>
        <Paper className='product-paper-wrapper'>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {item.description}
          </Typography>
        </Paper>
      </CardContent>
    </Card>
  );
}
