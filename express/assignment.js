const express = require('express')

const app = express()

app.use('/users', (req, res, next) => {
	console.log('Users middleware')
	res.send('Users page')
})

app.use('/', (req, res, next) => {
	console.log('Home middleware')
	res.send('Homepage')
})

app.listen(4000)
