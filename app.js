import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { productRouter } from './routes/product.routes.js';
import { AppError } from './utils/appError.js';
import { errorController } from './controllers/errorController.js';

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
app.use('/api/v1/product', productRouter);

// error handlebars
app.all('*', (req, res, next) => {
  next(new AppError(`Not found on to this server ${req.originalUrl}`, 404));
});

app.use(errorController);

export default app;
