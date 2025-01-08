import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import api from './api';
import {errorHandler, notFound} from './middlewares';

const app = express();

app.use(morgan('dev'));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-eval'"], // unsafe-eval is needed for Apidoc
    },
  }),
);
app.use(cors());
app.use(express.json());

// serve public folder for apidoc
app.use(express.static('public'));

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;
