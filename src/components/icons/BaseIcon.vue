<template>
  <svg
    :class="cn(
      'stroke-current fill-current',
      className
    )"
    :width="size !== undefined ? size : width"
    :height="size !== undefined ? size : height"
    :viewBox="viewBox" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot />
  </svg>
</template>

<script setup lang="ts">
import { cn } from '@/lib/cn';
import { IconProps } from '@/types/icon';

withDefaults(defineProps<IconProps>(), {
  width: 24,
  height: 24,
  size: undefined,
  viewBox: '0 0 24 24',
  className: ''
})
</script>

<style lang="scss" scoped>

</style>