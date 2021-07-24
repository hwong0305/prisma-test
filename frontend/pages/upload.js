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
  paper: {
    padding: '3rem',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  upload: {
    padding: theme.spacing(1),
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
                <TextField variant="outlined" label="Name" fullWidth />
                <TextField variant="outlined" label="Price" fullWidth />
                <TextField variant="outlined" label="Description" multiline fullWidth />
                <Grid container item xs={12} className={classes.upload} spacing={2}>
                  <Grid item xs={4}>
                    <input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      className={classes.htmlInput}
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
                <Grid item container justifyContent="flex-end" alignItems="center" spacing={2}>
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
