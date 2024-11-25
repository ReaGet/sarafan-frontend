<template>
	<article>
		<RouterLink class="flex flex-col" :to="{
			name: 'ProductPage',
			params: { id }
		}">
			<AspectRatio className="bg-gray rounded-3xl overflow-hidden">
				<Image
					:src="`https://sarafanweb.ru${photos[0]}`"
					className="w-full h-full object-cover"
				/>
			</AspectRatio>
			<h3 class="mt-4 text-[1.4rem]">{{ name }}</h3>
			<Button className="gap-4 mt-6" @click.prevent>
				<CartIcon :size="16" />
				<div>
					<div v-if="price" class="text-[1.4rem] leading-[1.4rem] font-bold">{{ price }} ₽</div>
					<!-- <div v-if="oldPrice" class="text-[1.2rem] leading-[1.2rem] text-gray-dark line-through">{{ oldPrice }} ₽</div> -->
				</div>
			</Button>
		</RouterLink>
	</article>
</template>

<script setup lang="ts">
import { Product } from '@/core/entities/Product'
import CartIcon from './icons/CartIcon.vue'
import AspectRatio from './ui/AspectRatio.vue'
import Button from './ui/Button.vue'
import Image from '@/components/ui/Image.vue';

defineProps<Product>()
</script>