import {IconButton, Grid, makeStyles} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    background: '#fff',
    width: '30%',
    height: '100%',
    padding: theme.spacing(3),
    right: 0,
    top: 0,
    zIndex: 5,
  },
  header: {
    color: '#eee',
    background: 'red',
    transform: 'skewY(-4deg) rotate(4deg)',
    padding: theme.spacing(1),
  },
  icon: {
    padding: theme.spacing(2.5),
  },
}));

export default function Cart(props) {
  const classes = useStyles();
  const {products} = props;

  // The cart uses Context in Wes Bos's tutorial. It seems like the reason for using context is to
  // share the cart between different pages

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <h3 className={classes.header}>Wes Bos&#39;s Cart</h3>
        </Grid>
        <Grid item xs={2}>
          <IconButton aria-label="close" color="secondary" className={classes.icon}>
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
