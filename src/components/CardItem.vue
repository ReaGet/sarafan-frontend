<template>
	<article class="relative">
		<div>Qty: {{ quantity }}</div>
		<RouterLink class="flex flex-col" :to="{
			name: 'ProductPage',
			params: { id: product.id }
		}">
			<AspectRatio className="bg-gray rounded-3xl overflow-hidden">
				<Image
					:src="`https://sarafanweb.ru${product.photo_urls[0]}`"
					className="w-full h-full object-cover"
				/>
			</AspectRatio>
			<h3 class="mt-4 text-[1.4rem]">{{ product.name }}</h3>
			<Button className="gap-4 mt-6" @click.prevent="handleAddToCart">
				<CartIcon :size="16" />
				<div>
					<div v-if="product.price" class="text-[1.4rem] leading-[1.4rem] font-bold">{{ product.price }} ₽</div>
				</div>
			</Button>
		</RouterLink>

		<Button className="absolute px-4 top-4 right-4 z-10" @click.prevent="handleRemove">
			<RemoveIcon :size="20" />
		</Button>
	</article>
</template>

<script setup lang="ts">
import CartIcon from './icons/CartIcon.vue'
import AspectRatio from './ui/AspectRatio.vue'
import Button from './ui/Button.vue'
import Image from '@/components/ui/Image.vue'
import CartService from '@/services/CartService'
import { useTelegram } from '@/hooks/useTelegram'
import RemoveIcon from '@/components/icons/RemoveIcon.vue'
import { CartItem } from '@/core/entities/Cart'

const { userId } = useTelegram()

const props = defineProps<CartItem>()

const emits = defineEmits<{
	(e: 'remove', productId: number): void
}>()

const handleAddToCart = () => {
	CartService.add(userId, {
		product_id: props.product.id,
		quantity: 1
	})
}

const handleRemove = () => {
	emits("remove", props.product.id)
}
</script>