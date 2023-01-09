const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars')
const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop')

const app = express()

app.engine(
	'handlebars',
	engine({
		extname: 'handlebars',
		defaultLayout: 'main-layout',
	})
)
app.set('view engine', 'ejs')
app.set('views', process.cwd() + '/express/views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes)
app.use('/shop', shopRouter)
app.use((req, res, next) => {
	res.render('404', { error: 'Page not found', pageTitle: 404 })
})

app.listen(4000)
