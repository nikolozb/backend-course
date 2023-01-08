const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	const url = req.url
	const method = req.method

	if (url === '/') {
		const users = []
		const data = fs.readFileSync('assign.txt', {
			encoding: 'utf-8',
		})
		const singleItem = data.split('\n')
		users.push(...singleItem)
		res.setHeader('Content-Type', 'text/html')
		res.write('<h1>Hello on the server</h1>')
		res.write(
			`
				<form action="/create-user" method="POST">
					<input type="text" name="username" placeholder="username">
					<button type="submit">Submit</button>
				</form>
			`
		)
		res.write(
			`
				<ul>
					${users.map(user => {
						if (user === '') {
							return
						} else {
							const newUser = JSON.stringify(user).replace(/["]/g, '')
							return `<li>${newUser}</li>`
						}
					})}
				</ul>
			`
		)
		return res.end()
	}

	if (url === '/create-user' && method === 'POST') {
		const body = []
		req.on('data', chunk => {
			body.push(chunk)
		})
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString()
			const message = parsedBody.split('=')[1]
			const logger = fs.createWriteStream('assign.txt', {
				flags: 'a',
			})
			logger.write(`${message}\n`)
			res.statusCode = 302
			res.setHeader('Location', '/')
			return res.end()
		})
	}

	res.setHeader('Content-Type', 'text/html')
	res.write('<h1>None of the routes where triggered</h1>')
	res.end()
})

server.listen(4000)
