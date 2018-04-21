var User = require('../models/user');
var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');

module.exports.createUser = function(req, res){
	if(!req.body.username || !req.body.email || !req.body.password){
		return res.status(400).send("Sorry Brah.. Please input username, email, and password");
	}

	var newPassword = bcrypt.hashSync(req.body.password, salt);

	var userData = {
		username: req.body.username,
		email: req.body.email,
		password: newPassword
	}

	var newUser = new User(userData);

	newUser.save(function(err){
		if(err){
			return res.status(500).send("server down or incorret username and password")
		}
		return res.status(200).send("user was created.. you can now login")
	})
}

module.exports.loginUser = function(req, res){
	if (!req.body.login || !req.body.password){
		return res.status(400).send("Login or password fag");
			}
	User.find({$or: [{username: req.body.login}, {email: req.body.login}]}, function(err, user){
		if (err){
			return res.status(500).send("user does not exits... or db fucked up")
		}

		if (user.length < 1){
			return res.status(400).send("user does not exist");
		}
		var loggedUser = user[0];
		var isVerified = bcrypt.compareSync(req.body.password, loggedUser.password);

		if (!isVerified){
			return res.status(400).send("Pass incorrect");
		}

		delete loggedUser.password;
		var token = jwt.sign(loggedUser, process.env.APP_SECRET, {expiresIn: 60 * 60 * 24 * 1000});

		res.json({
			user: loggedUser,
			token: token
		});
	})
}

module.exports.getUser = function(req, res){

}