<template>
  <div class="flex flex-col gap-1 w-full">
    <input
      :class="cn(
        'w-full h-[40px] px-6 rounded-xl border border-gray-dark placeholder:border-gray-dark text-[1.6rem] outline-none',
        { 'border-red-500': error }
      )"
      :placeholder="placeholder"
      v-model="model"
      :type="type"
      :required="required"
    />
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
  type?: string
  required?: boolean
}>(), {
  error: false,
  errorMessage: '',
  type: 'text',
  required: false
})

</script>