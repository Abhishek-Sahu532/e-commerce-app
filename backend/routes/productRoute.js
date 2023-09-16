const express = require('express');
const  {getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails}  = require('../controllers/productController');
const router = express.Router();
const {isAuthenticate} = require('../middlewares/auth')




router.route('/products').get(getAllProducts)
router.route('/product/new').post(createProduct)
router.route('/product/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails)
// router.route('/product/:id').delete(deleteProduct)
// router.route('/product/:id').get(getProductDetails)




module.exports = router