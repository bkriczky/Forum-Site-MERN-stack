var mongoose = require('mongoose');

module.exports = mongoose.model('post', {
	body: {type: "String", required: true},
	cat: {type: "String", required: true},
	isFlagged: {type: "Boolean", default: false},
	createdAt: {type: "Date", default: Date.now},
	updatedAt: {type: "Date", default: Date.now}
});