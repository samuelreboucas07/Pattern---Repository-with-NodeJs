import express, { urlencoded } from "express";
import bodyParser from 'body-parser';

import user from './routes/user';
import product from './routes/product';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencoded({ extended: false }));

app.use('/user', user);
app.use('/product', product);

export default app;