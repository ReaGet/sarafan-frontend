<template>
  <button :class="cn(
    'flex items-center justify-center h-16 px-6 rounded-3xl bg-gray',
    className,
    {
      'pointer-events-none': disabled
    }
  )">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cn } from '../../lib/cn';

defineProps<{
  className?: string
  disabled?: boolean
}>()

</script>

<style lang="scss" scoped>

</style>