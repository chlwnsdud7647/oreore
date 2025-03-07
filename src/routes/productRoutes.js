import express from 'express';
import authenticate from '../middleware/authMiddleware.js';
import productController from '../controllers/productController.js';

const router = express.Router();

// 1. 상품 목록 조회
router.get('/', productController.getProductList);

// 2. 상품 등록
router.post('/', authenticate, productController.uploadProduct);

// 3. 내가 올린 상품만 조회
router.get('/my', authenticate, productController.getMyProducts);

// 3. 특정 상품 조회
router.get('/:productId', productController.getProduct);

// 4. 상품 수정
router.put('/:productId', authenticate, productController.updateProduct);

// 5. 상품 삭제
router.delete('/:productId', authenticate, productController.deleteProduct);

export default router;
