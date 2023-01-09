const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/add-product', (req, res) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

router.post('/product', (req, res) => {
	const title = req.body
	console.log(title)
	res.send(title)
})

module.exports = router
