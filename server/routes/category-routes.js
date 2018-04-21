var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/category-controller');
var auth = require('../middleware/auth');

router.post('/create-category', auth, categoryController.createCategory);
router.get('/get-categories', categoryController.getCategories);

module.exports = router;