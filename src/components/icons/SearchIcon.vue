<template>
  <BaseIcon v-bind="props">
    <path d="M11.667 19C16.0853 19 19.667 15.4183 19.667 11C19.667 6.58172 16.0853 3 11.667 3C7.24871 3 3.66699 6.58172 3.66699 11C3.66699 15.4183 7.24871 19 11.667 19Z" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.6672 21L17.3672 16.7" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </BaseIcon>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';
import { IconProps } from '../../types/icon';

const props = withDefaults(defineProps<IconProps>(), {
  height: 24,
  width: 24,
  viewBox: '0 0 24 24'
})
</script>