const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/',productController.insertInitialData);

router.get('/products/:id' ,productController.getProductsDetails);


module.exports=router;