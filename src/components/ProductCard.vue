<template>
	<article>
		<RouterLink class="flex flex-col text-black" :to="{
			name: 'ProductPage',
			params: { id }
		}">
			<AspectRatio className="bg-gray rounded-3xl">
				<img :src="`/${thumbnail}`" class="w-full h-full object-cover" alt="">
			</AspectRatio>
			<h3 class="mt-4 text-[1.4rem]">{{ title }}</h3>
			<Button className="gap-4 mt-6 hover:bg-gray-dark/50" @click.prevent>
				<CartIcon />
				<div>
					<div v-if="price" class="text-[1.4rem] leading-[1.4rem] font-bold">{{ price }} ₽</div>
					<div v-if="oldPrice" class="text-[1.2rem] leading-[1.2rem] text-gray-dark line-through">{{ oldPrice }} ₽</div>
				</div>
			</Button>
		</RouterLink>
	</article>
</template>

<script setup lang="ts">
import CartIcon from './icons/CartIcon.vue'
import AspectRatio from './ui/AspectRatio.vue'
import Button from './ui/Button.vue'

defineProps<{
	id: string
	title: string
	price: number
	oldPrice?: number
	thumbnail: string
}>()
</script>