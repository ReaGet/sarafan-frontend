<template>
	<div class="products-tile">
		<ProductCard
			v-for="product in products"
			:key="product.id"
			v-bind="product"
		/>
	</div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'

const getRandPrice = () => ~~(Math.random() * 1700 + 300)

const products = [
	{ id: '1', title: 'Пицца "Японская"', price: getRandPrice(), oldPrice: 1200, thumbnail: 'images/product-image.png' },
	{ id: '2', title: 'Пицца "Пепперони"', price: getRandPrice(), thumbnail: 'images/product-image.png' },
	{ id: '3', title: 'Пицца "Японская"', price: getRandPrice(), oldPrice: 1200, thumbnail: 'images/product-image.png' },
	{ id: '4', title: 'Пицца "Пепперони"', price: getRandPrice(), thumbnail: 'images/product-image.png' },
	{ id: '5', title: 'Пицца "Японская"', price: getRandPrice(), oldPrice: 1200, thumbnail: 'images/product-image.png' },
	{ id: '6', title: 'Пицца "Пепперони"', price: getRandPrice(), thumbnail: 'images/product-image.png' },
	{ id: '7', title: 'Пицца "Японская"', price: getRandPrice(), oldPrice: 1200, thumbnail: 'images/product-image.png' },
	{ id: '8', title: 'Пицца "Пепперони"', price: getRandPrice(), thumbnail: 'images/product-image.png' },
]
</script>

<style lang="scss" scoped>
.products-tile {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;
	width: 100%;
}
</style>