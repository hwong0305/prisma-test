import {AppBar, Button, Link, makeStyles, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
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
}));

export default function Header() {
  const classes = useStyles();
  return (
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
  );
}
