var User = require('./models/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var express = require('express');

var router = express.Router();

router.post('/register', (req, res) => {
	var userData = req.body;
	var user = new User(userData);

	user.save((err, newUser) => {
		if (err) {
			return res.status(500).send({ message: `Error Saving User` });
		}
		var payload = { sub: newUser._id };
		var token = jwt.encode(payload, '123');
		res.status(200).send({ token });
	});
});

router.post('/login', async (req, res) => {
	var loginData = req.body;

	var user = await User.findOne({ email: loginData.email });

	if (!user) {
		return res.status(401).send({ message: `Invalid Login Credentials` });
	}

	bcrypt.compare(loginData.pswd, user.pswd, (err, isMatch) => {
		if (!isMatch) {
			return res.status(401).send({ message: `Invalid Login Credentials` });
		}
		var payload = { sub: user._id };
		var token = jwt.encode(payload, '123');
		res.status(200).send({ token });
	});
});

var auth = {
	router,
	checkAuthenticator: (req, res, next) => {
		if (!req.header('authorization')) {
			return res.sendStatus(401).send({
				message: 'unauthorized access. Missing auth header',
			});
		}
		var token = req.header('authorization').split(' ')[1];
		console.log(token);

		var payload = jwt.decode(token, '123');

		if (!payload) {
			return res.sendStatus(401).send({
				message: 'unauthorized access. Authheader Invalid',
			});
		}

		req.userId = payload.sub;
		next();
	},
};

module.exports = auth;
