import express, { urlencoded } from "express";
import bodyParser from 'body-parser';

import spartan from './routes/spartan';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencoded({ extended: false }));

app.use('/spartan', spartan);

export default app;