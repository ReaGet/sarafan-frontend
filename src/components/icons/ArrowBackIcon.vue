<template>
  <BaseIcon v-bind="props">
    <path d="M9 17L4 12L9 7" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 18V16C20 14.9391 19.5786 13.9217 18.8284 13.1716C18.0783 12.4214 17.0609 12 16 12H4" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </BaseIcon>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import { IconProps } from '@/types/icon'

const props = withDefaults(defineProps<IconProps>(), {
  viewBox: '0 0 24 24'
})
</script>