var Thread = require('../models/thread');

module.exports.createThread = function(req, res){
	if(!req.body.title || !req.body.categoryId || !req.body.body){
		res.status(400).send("Please enter all info");
	}

	var threadData = {
		title: req.body.title,
		categoryId: req.body.categoryId,
		username: req.user._doc.username,
		body: req.body.body
	}
	console.log("got this far");

	var newThread = new Thread(threadData);

	newThread.save(function(err){
		if(err){
			return res.status(500).send("Unable to save at this this");
		}

		return res.status(200).send("Yay it worked, thread created");
	})
}

module.exports.getThreadsByCategory = function(req, res){
	if(!req.query.categoryId){
		return res.status(400).send("Specify an ID")
	}

	Thread.find({categoryId: req.query.categoryId}, function(err, threads){
		if(err){
			return res.status(500).send("unable to get threads")
		}

		res.json({
			threads: threads
		});
	})
}

module.exports.getThreadById = function(req, res){
	if(!req.query.threadId){
		return res.status(400).send("Unable to get thread ID");
	}
	Thread.findOne({_id: req.query.threadId}, function(err, thread){
		if(err){
			return res.status(500).send("Unable to find thread");
		}
		res.json({
			thread: thread
		});
	})
}