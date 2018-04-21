var jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
	if(!req.headers['token']){
		return res.status(400).send("Please include valid token.")
	}

	var token = req.headers.token;

	jwt.verify(token, process.env.APP_SECRET, function(err, decoded){
		if (err){
			return res.status(400).send("Please specify a valid token");
		}

		req.user = decoded;
		//console.log(req.loggedUser);

		next();
	});
}