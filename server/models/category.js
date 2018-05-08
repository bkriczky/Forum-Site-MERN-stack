var mongoose = require('mongoose');

module.exports = mongoose.model('category', {
	name: {type: "String", required: true, unique: true},
});