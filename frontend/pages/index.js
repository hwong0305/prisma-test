import React, {Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Favorite from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {CardMedia} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
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
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
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
    id: 1,
    title: 'Airmax 270',
    price: 52.34,
    description: 'A sick shoe',
    image: 'https://via.placeholder.com/1920/1080',
  },
  {
    id: 2,
    title: 'KITH Hoodie',
    price: 329.99,
    description: 'A sick hoodie',
    image: 'https://via.placeholder.com/1920/1080',
  },
  {
    id: 3,
    title: 'Airmax 270',
    price: 52.34,
    description: 'A sick shoe',
    image: 'https://via.placeholder.com/1920/1080',
  },
  {
    id: 4,
    title: 'Tech Scarf',
    price: 39.99,
    description: '80% Wool / 20% Acryllic',
    image:
      'https://cdn.shopify.com/s/files/1/0058/4538/5314/products/P1010203_2_600x.jpg?v=1612559171',
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Sick Fits
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Products
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Orders
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Sell
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Wishlist
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} justifyContent="center" alignItems="center">
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
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
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
