<template>
  <header
    :class="cn(
      'sticky flex flex-col py-6 px-6 mb-6 top-0 bg-white z-20',
    )"
  >
    <div class="flex items-center gap-6">
      <Button @click="() => router.back()" className="text-gray-dark">
        <ArrowBackIcon :size="20" />
      </Button>

      <h1 class="pr-[65px] mx-auto text-[2.4rem] font-bold">{{ title }}</h1>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import Button from './ui/Button.vue'
import ArrowBackIcon from './icons/ArrowBackIcon.vue'
import { cn } from '@/lib/cn'
import { computed } from 'vue';

const router = useRouter(),
  route = useRoute()

const title = computed(() => {
  return route?.meta?.title || 'Page'
})
</script>