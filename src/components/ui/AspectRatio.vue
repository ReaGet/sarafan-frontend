<template>
  <div
    :class="cn(
      'relative w-full',
      className
    )"
    :style="{
      paddingTop: `${(100 / ratio).toFixed(2)}%`
    }"
  >
    <div class="absolute flex items-center justify-center w-full h-full top-0 left-0 overflow-hidden">
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