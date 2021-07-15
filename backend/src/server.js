const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send({message: 'Welcome to the beginning of nuthingless'});
});

app.listen(PORT, () => {
  console.log(`Now listening on Port ${PORT}`);
});
