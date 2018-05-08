var Post = require('../models/post');

module.exports.createPost = function(req, res){


	//return res.status(500).send({id: req.body.cat, body: req.body.body } );


	if(!req.body.body){
		return res.status(400).send("Please include body");
	}

	var postData = {
		body: req.body.body,
		cat: req.body.cat
	}

	var newPost = new Post(postData);

	newPost.save(function(err){
		if(err){
			return res.status(500).send("unable to save post at this time: " + err + ", " + 
				JSON.stringify({id: req.body.cat, body: req.body.body }));
		}

		return res.status(200).send("Post was successfully saved; " +
			JSON.stringify({id: req.body.cat, body: req.body.body }));

	})
	
} 

module.exports.getPosts = function(req, res){
	Post.find({}, function(err, posts){
		if (err){
			return res.status(500).send("unable to acquire posts")
		}
		res.json({
			posts: posts
		})
	})
}