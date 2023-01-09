const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res) => {
	console.log('Home middleware')
	res.send(
		`<form action="/admin/product" method="POST">
			<input type="text" name="title">
			<button type="submit">Submit</button>
		</form>`
	)
})

router.post('/product', (req, res) => {
	const title = req.body
	console.log(title)
	res.send(title)
})

module.exports = router
