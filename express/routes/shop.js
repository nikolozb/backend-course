const express = require('express')
const path = require('path')
const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res) => {
	res.render('shop', {
		prods: adminData.products,
		pageTitle: 'Shop',
		path: '/shop',
		hasProducts: adminData.products.length > 0,
		activeShop: true,
	})
})

module.exports = router
