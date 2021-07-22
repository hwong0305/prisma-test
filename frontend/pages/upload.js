import {Fragment, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Button, CssBaseline, Container, Grid, InputBase, Paper, TextField} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  base: {
    height: '100%',
  },
  input: {
    display: 'none',
  },
  form: {
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
  paper: {
    padding: '2rem',
  },
  upload: {
    border: 'solid 1px rgba(133,133,133,0.5)',
    borderRadius: '4px',
    padding: theme.spacing(2),
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
              <h1>Sell your product</h1>
              <form className={classes.form} noValidate>
                <TextField variant="outlined" label="Name" fullWidth />
                <TextField variant="outlined" label="Price" fullWidth />
                <TextField variant="outlined" label="Description" multiline fullWidth />
                <div className={classes.upload}>
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    className={classes.input}
                    type="file"
                    onChange={onChange}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                      style={{
                        marginRight: '15px',
                      }}
                    >
                      Upload
                    </Button>
                  </label>
                  <InputBase
                    placeholder="No File Chosen"
                    value={fileName}
                    style={{
                      paddingTop: '6px',
                      paddingBottom: '6px',
                    }}
                    readonly
                  />
                </div>
                <Grid item container justifyContent="center" alignItems="center">
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
