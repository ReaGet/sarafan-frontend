<template>
  <div class="relative">
    <div class="-mx-6">
      <AspectRatio className="bg-gray">
        <img :src="slides[currentSlide]" class="w-full h-full object-cover">
      </AspectRatio>
    </div>
    <div class="absolute h-28 w-full p-4 -bottom-14 bg-white rounded-3xl z-10 border border-gray">
      <div class="flex gap-5 overflow-x-auto">
        <div
          :class="cn(
            'shrink-0 w-20 rounded-xl overflow-hidden',
            { 'border border-primary': currentSlide === i}
          )"
          v-for="(slide, i) in slides"
          :key="slide"
          @click="() => currentSlide = i"
        >
          <AspectRatio
            className="shrink-0 bg-gray"
          >
            <img :src="slide" class="w-full h-full object-cover">
          </AspectRatio>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AspectRatio from '../components/ui/AspectRatio.vue'
import { cn } from '../lib/cn';

const currentSlide = ref(0)

const slides = [
  "/images/thumbnails/slide1.jpg",
  "/images/thumbnails/slide2.webp",
  "/images/thumbnails/slide3.avif",
  "/images/thumbnails/slide4.avif",
  "/images/thumbnails/slide5.jpg",
  "/images/thumbnails/slide6.avif",
]

</script>