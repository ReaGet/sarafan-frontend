<template>
  <BaseIcon v-bind="props">
    <path d="M19.333 14C20.823 12.54 22.333 10.79 22.333 8.5C22.333 7.04131 21.7535 5.64236 20.7221 4.61091C19.6906 3.57946 18.2917 3 16.833 3C15.073 3 13.833 3.5 12.333 5C10.833 3.5 9.59301 3 7.83301 3C6.37432 3 4.97537 3.57946 3.94392 4.61091C2.91247 5.64236 2.33301 7.04131 2.33301 8.5C2.33301 10.8 3.83301 12.55 5.33301 14L12.333 21L19.333 14Z" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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