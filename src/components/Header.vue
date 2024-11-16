<template>
  <header
    :class="cn(
      'sticky flex flex-col px-6 mb-6 top-0 bg-white z-20',
      { 'mb-0': isProductPage }
    )"
  >
    <div class="flex items-center gap-6">
      <Button v-if="isBusinessPage" @click="() => router.back()" className="text-gray-dark">
        <ArrowBackIcon :size="20" />
      </Button>

      <Search />
    </div>
    <div
      v-if="isProductPage"
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
import Search from '@/components/Search.vue'
import Button from './ui/Button.vue'
import ArrowBackIcon from './icons/ArrowBackIcon.vue'
import ShareIcon from './icons/ShareIcon.vue'
import HeartIcon from './icons/HeartIcon.vue'
import { cn } from '@/lib/cn'

const route = useRoute(),
  router = useRouter()

const isProductPage = computed(() => {
  return route.name === 'ProductPage'
})

const isBusinessPage = computed(() => {
  return route.name === 'BusinessPage'
})
</script>

<style lang="scss" scoped>

</style>