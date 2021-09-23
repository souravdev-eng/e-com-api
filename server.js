import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import app from './app.js';

const DB = process.env.DB_URL;

mongoose
  .connect(DB)
  .then(() => console.log(`DB is connected to the server...`));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`App is running on PORT ${port}...`));
