var Post = require('../models/post');

module.exports.createPost = function(req, res){
	if(!req.body.threadId || !req.body.body){
		return res.status(400).send("Please include both threadId and body");
	}

	var postData = {
		threadId: req.body.threadId,
		username: req.user._doc.username,
		body: req.body.body
	}

	var newPost = new Post(postData);

	newPost.save(function(err){
		if(err){
			return res.status(500).send("unable to save post at this time");
		}

		return res.status(200).send("Post was successfully saved");

	})
}

module.exports.getPostByThread = function(req, res){
	if(!req.query.threadId){
		return res.status(400).send("Please include a Thread Id");
	}

	Post.find({threadId: req.query.threadId}, function(err, posts){
		if(err){
			return res.status(500).send("Unable to get post at this time");
		}
		res.json({
			posts: posts
		})
	})

}