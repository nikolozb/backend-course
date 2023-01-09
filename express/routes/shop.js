const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
	console.log('Home middleware')
	res.send('Homepage')
})

module.exports = router
