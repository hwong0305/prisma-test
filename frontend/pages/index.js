import React, {Fragment} from 'react';
import {
  Button,
  Container,
  CardMedia,
  makeStyles,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
} from '@material-ui/core';

import Header from '../src/components/Header';
import Cart from '../src/components/Cart';

const useStyles = makeStyles(theme => ({
  price: {
    position: 'absolute',
    top: 5,
    right: 5,
    background: 'red',
    color: 'white',
    padding: '0.2rem',
    borderRadius: '0.5rem',
    opacity: 0.7,
  },
  heroContent: {
    background: `url(
      'https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396_1280.jpg'
    )`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    padding: theme.spacing(8, 0, 6),
  },
  heroCard: {
    marginLeft: theme.spacing(5),
    padding: '2rem',
  },
  products: {
    marginTop: '2rem',
  },
  card: {
    maxWidth: 345,
    position: 'relative',
  },
  cardMedia: {
    height: '50%',
  },
}));

const products = [
  {
    id: 4,
    title: 'Tech Scarf',
    price: 39.99,
    description: '80% Wool / 20% Acryllic',
    image:
      'https://cdn.shopify.com/s/files/1/0058/4538/5314/products/P1010203_2_600x.jpg?v=1612559171',
  },
  {
    id: 5,
    title: `The ABC's of Gaming Book`,
    price: 14.99,
    description: `The ABC's of Gaming is Linus Media Group's first fully custom illustrated board book, and aims to provide a fun tech-themed ABC journey for both kids and adults.
    It's perfect to read aloud to kids ages 6m-3yr who are learning the alphabet, but the fun rhymes and bright illustrations can be enjoyed by older kids as well.
    `,
    image:
      'https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Frontface_1400x.jpg?v=1623954925',
  },
  {
    id: 6,
    title: 'White & Black Insulated Water Bottle',
    price: 29.99,
    description: `Show off your inner techie in style with the LTT vacuum-insulated water bottle. 
    Linus Tech Tips vacuum insulated water bottles are intended to keep hot drinks hot for up to 8 hours, and cold drinks cold for up to 16 hours.
    Holds 21 fluid ounces`,
    image:
      'https://cdn.shopify.com/s/files/1/0058/4538/5314/products/0001_df266121-bef0-4f6c-ad1b-dc06a84579ee_1400x.jpg?v=1570812307',
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Cart products={products} />
      {/* Hero unit */}
      <Container maxWidth={false} component="main" className={classes.heroContent}>
        <Grid container spacing={0} justifyContent="flex-start" alignItems="center">
          <Grid item xs={5}>
            <Card className={classes.heroCard}>
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Pricing
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" component="p">
                Quickly build an effective pricing table for your potential customers with this
                layout. It&apos;s built with default Material-UI components with little
                customization.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" className={classes.products}>
        <Grid container spacing={5} justifyContent="center">
          {products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt={product.title}
                  title={product.title}
                  image={product.image}
                  className={classes.cardMedia}
                ></CardMedia>
                <Typography variant="h5" component="h3" className={classes.price}>
                  ${product.price}
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
}
