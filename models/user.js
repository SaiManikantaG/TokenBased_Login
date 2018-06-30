var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	email: String,
	pswd: String,
	description: String,
	name: String,
});

userSchema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('pswd')) return next();
	bcrypt.hash(user.pswd, null, null, (err, hash) => {
		if (err) {
			return next(err);
		}
		user.pswd = hash;
		console.log(user.pswd);
		next();
	});
});
module.exports = mongoose.model('user', userSchema);
