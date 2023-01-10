const Product = require('../models/product')

exports.getAddProduct = (req, res) => {
	res.render('add-product', {
		pageTitle: 'Add product',
		path: '/admin/add-product',
		activeProduct: true,
	})
}

exports.postAddProduct = (req, res) => {
	const product = new Product(req.body.title)
	product.save()
	res.redirect('/shop')
}
