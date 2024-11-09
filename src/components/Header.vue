<template>
  <header
    :class="cn(
      'sticky flex flex-col px-6 mb-6 top-0 bg-white z-20',
      { 'mb-0': isProductCard }
    )"
  >
    <Search />
    <div
      v-if="isProductCard"
      class="flex justify-between pb-6 text-gray-dark"
    >
      <Button @click="() => router.back()">
        <ArrowBackIcon :size="20" />
      </Button>

      <div class="flex">
        <Button className="bg-transparent">
          <HeartIcon :size="20" />
        </Button>
        <Button>
          <ShareIcon :size="20" />
        </Button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import Search from '../components/Search.vue'
import Button from './ui/Button.vue'
import ArrowBackIcon from './icons/ArrowBackIcon.vue'
import ShareIcon from './icons/ShareIcon.vue'
import HeartIcon from './icons/HeartIcon.vue'
import { cn } from '../lib/cn'

const route = useRoute(),
  router = useRouter()

const isProductCard = computed(() => {
  return route.name === 'ProductPage'
})
</script>

<style lang="scss" scoped>

</style>