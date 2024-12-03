<template>
  <Section className="py-0">
    <h2 class="mb-8 text-[2rem] font-bold">Корзина ({{ totalCount }})</h2>
    <CardItem
      v-for="item in cartItems"
      :key="item.product.id"
      v-bind="item"
      @remove="handleRemove"
    />
  </Section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Section from '@/components/ui/Section.vue'
import { useTelegram } from '@/hooks/useTelegram'
import CartService from '@/services/CartService'
import { type CartItem } from '@/core/entities/Cart'
import CardItem from '@/components/CardItem.vue'

const { userId } = useTelegram()
const cartItems = ref<CartItem[]>([])

onMounted(async () => {
  await handleFetch()
})

const handleFetch = async () => {
  cartItems.value = await CartService.get(userId)
}

const handleRemove = async (productId: number) => {
  await CartService.remove(userId, {
    product_id: productId,
    quantity: 1
  }).then(() => {
    handleFetch()
  })
}

const totalCount = computed(() => {
  return cartItems?.value.reduce((sum, i) => sum + i.quantity, 0)
})

</script>