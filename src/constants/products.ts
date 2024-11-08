const getRandPrice = () => ~~(Math.random() * 1700 + 300)

export const PRODUCTS = [
	{ id: '1', title: 'Пицца "Японская"', price: getRandPrice(), oldPrice: 1200, thumbnail: 'images/product-image.png' },
	{ id: '2', title: 'Пицца "Пепперони"', price: getRandPrice(), thumbnail: 'images/product-image.png' },
	{ id: '3', title: 'Пицца "Японская"', price: getRandPrice(), oldPrice: 1200, thumbnail: 'images/product-image.png' },
	{ id: '4', title: 'Пицца "Пепперони"', price: getRandPrice(), thumbnail: 'images/product-image.png' },
	{ id: '5', title: 'Пицца "Японская"', price: getRandPrice(), oldPrice: 1200, thumbnail: 'images/product-image.png' },
	{ id: '6', title: 'Пицца "Пепперони"', price: getRandPrice(), thumbnail: 'images/product-image.png' },
	{ id: '7', title: 'Пицца "Японская"', price: getRandPrice(), oldPrice: 1200, thumbnail: 'images/product-image.png' },
	{ id: '8', title: 'Пицца "Пепперони"', price: getRandPrice(), thumbnail: 'images/product-image.png' },
]