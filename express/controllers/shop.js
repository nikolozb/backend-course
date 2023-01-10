const Product = require('../models/product')

exports.getShop = (req, res) => {
	const products = Product.fetchAll()

	res.render('shop', {
		prods: products,
		pageTitle: 'Shop',
		path: '/shop',
		hasProducts: products.length > 0,
		activeShop: true,
	})
}
