const productsList = []

class Product {
	constructor(title) {
		this.title = title
	}

	save() {
		productsList.push(this)
	}

	static fetchAll() {
		return productsList
	}
}

module.exports = Product
