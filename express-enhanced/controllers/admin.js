const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
	res.render('admin/edit-product', {
		pageTitle: 'Add Product',
		path: '/admin/edit-product',
		editing: false,
	})
}

exports.postAddProduct = (req, res, next) => {
	const title = req.body.title
	const imageUrl = req.body.imageUrl
	const price = req.body.price
	const description = req.body.description
	const product = new Product(title, imageUrl, description, price)
	product
		.save()
		.then(() => res.redirect('/'))
		.catch(err => console.log(err))
}

exports.getEditProduct = (req, res, next) => {
	const editMode = req.query.edit
	if (!editMode) {
		return res.redirect('/')
	}
	const productId = req.params.productId
	Product.findById(productId, product => {
		if (!product) {
			res.redirect('/')
		}
		res.render('admin/edit-product', {
			pageTitle: 'Edit Product',
			path: '/admin/edit-product',
			editing: editMode,
		})
	})
}

exports.postEditProduct = (req, res, next) => {}

exports.getProducts = (req, res, next) => {
	Product.fetchAll(products => {
		res.render('admin/products', {
			prods: products,
			pageTitle: 'Admin Products',
			path: '/admin/products',
		})
	})
}
