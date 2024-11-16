<template>
  <BaseIcon v-bind="props">
    <path d="M3.33301 8H12.6663" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 3.33331V12.6666" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </BaseIcon>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';
import { IconProps } from '@/types/icon';

const props = withDefaults(defineProps<IconProps>(), {
  viewBox: '0 0 16 16'
})
</script>