import { catchAsync } from 'catch-async-express';
import Product from '../models/productModel.js';
import { AppError } from '../utils/appError.js';

export const createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    status: 'success',
    data: product,
  });
});

export const getAllProduct = catchAsync(async (req, res, next) => {
  const product = await Product.find();

  if (product.length === 0) {
    return next(new AppError('There is no product found', 404));
  }
  res.status(200).json({
    status: 'success',
    result: product.length,
    data: product,
  });
});

export const getProductById = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new AppError('Sorry! There is no product found with this ID', 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: product,
  });
});

export const updateProductById = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    return next(new AppError('There is no product found with this ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: product,
  });
});
