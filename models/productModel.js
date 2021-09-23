import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A product must have a title'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'A product must have price'],
    min: [100, 'A product should be getter than 100'],
    max: [1000000, 'A product should not be getter than 1,000,000'],
  },
  description: {
    type: String,
    required: [true, 'A product must have a description'],
    minlength: [50, 'A product must have at list 100 characters description'],
  },
  category: {
    type: String,
    enum: ['men', 'women', 'electronics', 'jewelry'],
    required: [true, 'A product must have a category'],
  },
  image: {
    type: String,
    required: [true, 'A product must have a image'],
  },
  images: Array,
  rating: {
    type: Number,
    min: [1, 'A product must have at list 1 rating'],
    max: [5, 'A product rating not be more than 5'],
  },
  stockIn: {
    type: Number,
    required: [true, 'A product must have a stockIn QTY'],
    min: [10, 'A product quantity not be less than 10'],
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
