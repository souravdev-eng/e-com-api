import express from 'express';
import {
  createProduct,
  getAllProduct,
  getProductById,
  updateProductById,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').post(createProduct).get(getAllProduct);

router.route('/:id').get(getProductById).patch(updateProductById);

export { router as productRouter };
