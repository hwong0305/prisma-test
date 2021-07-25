import {Fragment, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {
  Button,
  CssBaseline,
  Container,
  Grid,
  InputBase,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  base: {
    height: '100%',
  },
  htmlInput: {
    display: 'none',
  },
  form: {
    marginTop: '1rem',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
  input: {
    textOverflow: 'ellipsis',
  },
  label: {
    display: 'block',
    position: 'absolute',
    fontFamily: 'Roboto',
    fontSize: '16px',
    transformOrigin: 'top left',
    background: 'white',
    boxSizing: 'border-box',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    transform: 'translate(0px, -25px) scale(0.75)',
    zIndex: 1,
    color: 'inherit',
  },
  paper: {
    padding: '3rem',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  upload: {
    border: 'solid 1px rgba(0,0,0,0.33)',
    color: 'rgba(0,0,0,0.54)',
    borderRadius: '0.5rem',
    padding: theme.spacing(2),
    position: 'relative',
    boxSizing: 'border-box',
    '&:hover': {
      borderColor: theme.palette.primary.dark,
      color: theme.palette.primary.dark,
      // borderWidth: '2px',
    },
  },
}));

export default function Upload() {
  const classes = useStyles();
  const [fileName, setFileName] = useState('');

  const onChange = e => {
    setFileName(e.target.files[0].name);
  };

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.root}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          className={classes.base}
        >
          <Grid item>
            <Paper elevation={3} className={classes.paper}>
              <Typography component="h1" variant="h5">
                Sell your Product
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  label="Name"
                  InputLabelProps={{shrink: true}}
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  label="Price"
                  InputLabelProps={{shrink: true}}
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  label="Description"
                  InputLabelProps={{shrink: true}}
                  multiline
                  fullWidth
                />
                <Grid container item xs={12} className={classes.upload} spacing={0}>
                  <Grid item xs={4}>
                    <label htmlFor="file" className={classes.label}>
                      Upload
                    </label>
                    <input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      className={classes.htmlInput}
                      name="file"
                      type="file"
                      onChange={onChange}
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" color="secondary" component="span">
                        Upload
                      </Button>
                    </label>
                  </Grid>
                  <Grid item xs={8}>
                    <InputBase
                      placeholder="No File Chosen"
                      value={fileName}
                      classes={{input: classes.input}}
                      fullWidth
                      readOnly
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={2}
                  className={classes.submit}
                >
                  <Button variant="contained" color="primary" component="span">
                    Submit
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
