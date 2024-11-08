<template>
	<section>
		<h2
			v-if="title"
			class="mb-8 text-[2rem] font-bold"
		>
			<RouterLink v-if="linkFollow" :to="linkFollow" class="flex items-center gap-2">
				{{ title }} <ArrowIcon />
			</RouterLink>
			<template v-else>
				{{ title }}
			</template>
		</h2>
		<div class="product-list">
			<ProductCard
				v-for="product in products"
				:key="product.id"
				v-bind="product"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import ArrowIcon from './icons/ArrowIcon.vue';
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

// TODO: возможно передавать в качестве пропсов категорию, количество товаров за раз и сам компонент уже отвечает за запросы и т.д.
defineProps<{
	title?: string
	linkFollow?: string
}>()
</script>

<style lang="scss" scoped>
.product-list {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;
	width: 100%;
}
</style>