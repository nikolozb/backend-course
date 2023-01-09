const http = require('http')
const express = require('express')

const app = express()

app.use((req, res, next) => {
	console.log('In first middleware')
	next()
})

app.use((req, res, next) => {
	console.log('In second middleware')
	next()
})

const server = http.createServer(app)
server.listen(4000)
