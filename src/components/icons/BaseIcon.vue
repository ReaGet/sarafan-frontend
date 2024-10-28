<template>
  <svg :width="width" :height="height" :viewBox="viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
    <slot />
  </svg>
</template>

<script setup lang="ts">
import { IconProps } from '../../types/icon';

withDefaults(defineProps<IconProps>(), {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
})
</script>

<style lang="scss" scoped>

</style>