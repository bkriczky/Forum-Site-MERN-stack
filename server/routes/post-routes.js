var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
var postController = require('../controllers/post-controller');

router.post('/create-post', auth, postController.createPost);

router.get('/get-post-by-thread', postController.getPostByThread);

module.exports = router;