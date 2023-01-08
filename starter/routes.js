const fs = require('fs')

const requestHandler = (req, res) => {
	const url = req.url
	const method = req.method

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html')
		res.write(
			'<form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form>'
		)
		return res.end()
	}

	if (url === '/message' && method === 'POST') {
		const body = []
		// data is processed as chunks and this function will rerun until all the chunk in streams are done
		req.on('data', chunk => {
			// chunk in a buffer
			body.push(chunk)
		})
		return req.on('end', () => {
			// converting buffered chunk to a string
			// we will receive a string that have name of the input and input itself, in this case message=sometext
			const parsedBody = Buffer.concat(body).toString()
			const message = parsedBody.split('=')[1]
			fs.writeFile('message.txt', message, err => {
				res.statusCode = 302
				res.setHeader('Location', '/')
				return res.end()
			})
		})
	}

	res.setHeader('Content-Type', 'text/html')
	res.write('<h1>hello</h1>')
	res.end()
}

module.exports = { requestHandler }
