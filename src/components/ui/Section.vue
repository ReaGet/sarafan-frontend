<template>
  <div :class="cn(
    'px-6 py-6 bg-white',
    className
  )">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/cn'

defineProps<{
  className?: string
}>()
</script>

<style scoped>
div {
  position: relative;
}

div::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--gray);
  z-index: -1;
}
</style>