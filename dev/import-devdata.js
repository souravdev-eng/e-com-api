import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import Product from '../models/productModel.js';
const __dirname = path.resolve();
console.log(__dirname);
dotenv.config({ path: './config.env' });

const DB = process.env.DB_URL;
mongoose.connect(DB).then(() => console.log('DB connection successful'));

const Products = JSON.parse(
  fs.readFileSync(`${__dirname}/dev/productList.data.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Product.create(Products);
    console.log('Product is imported sucssesfully');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log('Product is deleted sucssesfully');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
