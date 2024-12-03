<template>
  <BaseIcon v-bind="props">
    <path d="M10 12V17" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 12V17" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 7H20" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </BaseIcon>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';
import { IconProps } from '@/types/icon'

const props = withDefaults(defineProps<IconProps>(), {
  viewBox: '0 0 24 24'
})
</script>