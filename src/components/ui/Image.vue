<template>
  <div v-if="isLoading" class="flex items-center justify-center w-full h-full rounded-xl bg-gray-hover">
    <ImageIcon :size="32" className="text-gray-dark" />
  </div>
  <img
    v-if="!isLoadingError"
    :class="cn(
      className,
      { 'hidden': isLoading }
    )"
    :src="`${imageSrc}`"
    :alt="alt"
    :width="width"
    :height="height"
    @load="handleLoading"
    @error="handleLoadingError"
  >
</template>

<script setup lang="ts">
import ImageIcon from '@/components/icons/imageIcon.vue'
import { cn } from '@/lib/cn'
import { onMounted, ref, watch } from 'vue'

const isLoading = ref(true),
  isLoadingError = ref(false),
  imageSrc = ref('')

const props = withDefaults(defineProps<{
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  className?: string
}>(), {
  width: 48,
  height: 48,
})

watch(() => props.src, () => {
  imageSrc.value = props.src
  isLoading.value = true
  isLoadingError.value = false
})

onMounted(() => {
  imageSrc.value = props.src
})

const handleLoading = () => {
  isLoading.value = false
}

const handleLoadingError = () => {
  isLoadingError.value = true
}
</script>