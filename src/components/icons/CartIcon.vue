<template>
  <BaseIcon v-bind="props">
    <path d="M5.33317 14.6667C5.70136 14.6667 5.99984 14.3682 5.99984 14C5.99984 13.6319 5.70136 13.3334 5.33317 13.3334C4.96498 13.3334 4.6665 13.6319 4.6665 14C4.6665 14.3682 4.96498 14.6667 5.33317 14.6667Z" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.6667 14.6667C13.0349 14.6667 13.3333 14.3682 13.3333 14C13.3333 13.6319 13.0349 13.3334 12.6667 13.3334C12.2985 13.3334 12 13.6319 12 14C12 14.3682 12.2985 14.6667 12.6667 14.6667Z" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.3667 1.3667H2.70003L4.47337 9.6467C4.53842 9.94994 4.70715 10.221 4.95051 10.4133C5.19387 10.6055 5.49664 10.7069 5.8067 10.7H12.3267C12.6301 10.6995 12.9244 10.5956 13.1607 10.4053C13.3971 10.215 13.5615 9.94972 13.6267 9.65336L14.7267 4.70003H3.41337" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </BaseIcon>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';
import { IconProps } from '@/types/icon';

const props = withDefaults(defineProps<IconProps>(), {
  viewBox: '0 0 16 16'
})
</script>