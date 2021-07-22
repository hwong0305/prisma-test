import {Fragment, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Button, CssBaseline, Container, TextField} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  input: {
    display: 'none',
  },
}));

export default function Upload() {
  const classes = useStyles();
  const [fileName, setFileName] = useState('');

  const onChange = e => {
    setFileName(e.target.value.split('\\')[2]);
  };

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1>Sell your product</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            className={classes.input}
            type="file"
            onChange={onChange}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          <span>{fileName}</span>
        </form>
      </Container>
    </Fragment>
  );
}
