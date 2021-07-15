const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send({message: 'Welcome to the beginning of nuthingless'});
});

app.listen(PORT, () => {
  console.log(`Now listening on Port ${PORT}`);
});
