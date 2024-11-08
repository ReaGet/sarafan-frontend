<template>
  <div
    :class="cn(
      'relative w-full',
      className
    )"
    :style="{
      paddingBottom: `${(100 / ratio).toFixed(2)}%`
    }"
  >
    <div class="absolute flex items-center justify-center top-0 left-0 bottom-0 right-0 overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '../../lib/cn';


withDefaults(defineProps<{
  ratio?: number
  className?: string
}>(), {
  ratio: 1,
  className: ''
})
</script>