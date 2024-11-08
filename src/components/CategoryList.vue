<template>
  <div class="grid grid-cols-5 gap-6 mb-12">
    <div
      v-for="(item, i) in Array(10).fill(0)"
      :key="i"
    >
      <AspectRatio className="bg-gray rounded-lg"></AspectRatio>
      <div class="text-[1.2rem] text-black line-clamp-1 text-center">Category</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AspectRatio from '../components/ui/AspectRatio.vue'

</script>