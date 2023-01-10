const Product = require('../models/product')

exports.getShop = (req, res) => {
	Product.fetchAll(products => {
		res.render('shop', {
			prods: products,
			pageTitle: 'Shop',
			path: '/shop',
			hasProducts: products.length > 0,
		})
	})
}
