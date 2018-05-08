var Category = require('../models/category');

module.exports.createCategory = function(req, res){
	if (!req.body.name){
		return res.status(400).send("Please include name and description")
	}

	var categoryData = {
		name: req.body.name
		
	}

	newCategory = new Category(categoryData);

	newCategory.save(function(err){
		if(err){
			return res.status(500).send("Unable to save category")
		}
	
	})
}

module.exports.getCategories = function(req, res){
	Category.find({}, function(err, categories){
		if (err){
			return res.status(500).send("unable to acquire categoreis")
		}
		res.json({
			categories: categories
		})
	})
}