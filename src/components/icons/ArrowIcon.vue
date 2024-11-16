<template>
  <BaseIcon v-bind="props">
    <path d="M9 18L15 12L9 6" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </BaseIcon>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import { IconProps } from '@/types/icon'

const props = withDefaults(defineProps<IconProps>(), {
  viewBox: '0 0 24 24'
})
</script>