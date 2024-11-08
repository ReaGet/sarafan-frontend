<template>
	<article class="flex flex-col text-black">
		<AspectRatio className="bg-gray rounded-3xl">
			<img :src="`/${thumbnail}`" class="w-full h-full object-cover" alt="">
		</AspectRatio>
		<h2 class="mt-4 text-[1.4rem]">{{ title }}</h2>
		<Button className="gap-4 mt-6 hover:bg-gray-dark/50">
			<CartIcon />
			<div>
				<div v-if="price" class="text-[1.4rem] leading-[1.4rem] font-bold">{{ price }} ₽</div>
				<div v-if="oldPrice" class="text-[1.2rem] leading-[1.2rem] text-gray-dark line-through">{{ oldPrice }} ₽</div>
			</div>
		</Button>
	</article>
</template>

<script setup lang="ts">
import CartIcon from './icons/CartIcon.vue';
import AspectRatio from './ui/AspectRatio.vue';
import Button from './ui/Button.vue'

const props = defineProps<{
	id: string
	title: string
	price: number
	oldPrice?: number
	thumbnail: string
}>()
</script>