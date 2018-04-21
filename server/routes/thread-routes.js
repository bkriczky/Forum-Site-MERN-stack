var express = require('express');
var router = express.Router();
var auth = require("../middleware/auth");
var threadController = require('../controllers/thread-controller');

router.post('/create-thread', auth, threadController.createThread);

//get endpoints
router.get('/get-thread-by-id', threadController.getThreadById);
router.get('/get-threads-by-category', threadController.getThreadsByCategory);

module.exports = router;