<template>
  <button :class="cn(
    'flex items-center justify-center h-16 px-6 rounded-3xl bg-gray hover:bg-gray-hover transition-colors',
    className,
    {
      'pointer-events-none': disabled,
      'js-loading': isLoading
    }
  )">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cn } from '@/lib/cn'

defineProps<{
  className?: string
  disabled?: boolean
  isLoading?: boolean
}>()

</script>

<style lang="scss" scoped>
.js-loading {
  pointer-events: none;
  background-color: var(--gray-dark);
  user-select: none;
}
</style>