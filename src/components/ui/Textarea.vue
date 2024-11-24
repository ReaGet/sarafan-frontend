<template>
  <div class="flex flex-col gap-1 w-full">
    <textarea
      :class="cn(
        'w-full px-6 py-5 rounded-xl border border-gray-dark placeholder:border-gray-dark text-[1.6rem] outline-none',
        { 'border-red-500': error }
      )"
      :rows="rows"
      :placeholder="placeholder"
      v-model="model"
    ></textarea>
    <span v-if="error && errorMessage" class="text-[1.4rem] text-red-500">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang='ts'>
import { cn } from '@/lib/cn'

const model = defineModel()
withDefaults(defineProps<{
  placeholder: string
  error?: boolean
  errorMessage?: string
  rows?: number
}>(), {
  error: false,
  rows: 6,
  errorMessage: ''
})

</script>