<template>
  <div :class="cn(
    'h-6 w-full bg-gray',
    className
  )"></div>
</template>

<script setup lang="ts">
import { cn } from '../lib/cn';

defineProps<{
  className?: string
}>()
</script>