var express = require('express');
var router = express.Router();
var postController = require('../controllers/post-controller');

router.post('/create-posts', postController.createPost);
router.get('/get-posts', postController.getPosts);

//router.post('/', postController.createPost);
//router.get('/', postController.getPosts);

module.exports = router;