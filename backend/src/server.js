import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send({message: 'Welcome to the beginning of nuthingless'});
});

app.listen(PORT, () => {
  console.log(`Now listening on Port ${PORT}`);
});
