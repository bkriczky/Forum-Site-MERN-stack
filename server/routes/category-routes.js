var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/category-controller');

router.post('/create-category', categoryController.createCategory);
router.get('/get-categories', categoryController.getCategories);

module.exports = router;