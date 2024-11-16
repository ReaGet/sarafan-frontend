<template>
  <Section class="pt-0 rounded-b-3xl">
    <div class="relative pb-14">
      <div class="-mx-6">
        <AspectRatio className="bg-gray">
          <img :src="`https://sarafanweb.ru/${product?.photos[currentSlide]}`" class="w-full h-full object-cover">
        </AspectRatio>
      </div>
      <div class="absolute h-28 w-full p-4 bottom-0 bg-white rounded-3xl z-10 border border-gray">
        <div class="flex gap-5 overflow-hidden">
          <div
            :class="cn(
              'shrink-0 w-20 rounded-xl overflow-hidden',
              { 'border border-primary': currentSlide === i}
            )"
            v-for="(slide, i) in product?.photos"
            :key="slide"
            @click="() => currentSlide = i"
          >
            <AspectRatio
              className="shrink-0 bg-gray"
            >
              <img :src="`https://sarafanweb.ru/${slide}`" class="w-full h-full object-cover" loading="lazy">
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  
    <RouterLink
      :to="{
        name: 'BusinessPage',
        params: {
          id: 1
        }
      }"
    >
      <div class="flex items-center justify-between py-3 px-6 mt-12 bg-gray rounded-xl text-gray-dark">
        <div class="flex items-center gap-5">
          <div class="w-[32px] h-[32px] rounded-xl overflow-hidden">
            <img class="h-full w-full object-cover" width="32" height="32" src="/images/profile.jpg" />
          </div>
          <div>
            <div class="text-[1.6rem] leading-[1.6rem] text-black font-medium">{{ business?.name }}</div>
            <div class="text-[1.4rem]">Магазин</div>
          </div>
        </div>
    
        <ArrowIcon :size="24" />
      </div>
    </RouterLink>

    <h1 class="mt-8 text-[2rem] font-bold">{{ product?.name }}</h1>
    <!-- <div class="mt-4 space-x-4 text-[1.4rem] leading-[1.4rem] text-gray-dark">
      <RouterLink to="/" class="px-6 py-2 bg-gray rounded-xl">Мужская одежда</RouterLink>
      <RouterLink to="/" class="px-6 py-2 bg-gray rounded-xl">Футболки</RouterLink>
    </div> -->

    <div class="mt-12 text-[1.6rem]">
      <p class="inline line-clamp-5">{{ product?.description }}</p>
      <!-- <button class="font-bold" type="button">Читать</button> -->
    </div>
  </Section>
  <Separator />
  <Section class="rounded-t-3xl">
    <!-- <ProductList title="Рекомендуем также" linkFollow="/" /> -->
  </Section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AspectRatio from '../components/ui/AspectRatio.vue'
import { cn } from '../lib/cn';
import ArrowIcon from '../components/icons/ArrowIcon.vue'
// import ProductList from '../components/ProductList.vue'
import Section from '../components/Section.vue'
import Separator from '../components/Separator.vue'
import { Product } from '../core/entities/Product'
import { Business } from '../core/entities/Business'
import { useRoute, useRouter } from 'vue-router'
import ProductService from '../services/ProductService'
import BusinessService from '../services/BusinessService'

const currentSlide = ref(0)
const router = useRouter()
const { params } = useRoute()

const product = ref<Product|null>()
const business = ref<Business|null>()

onMounted(async () => {
  const id = params.id as string || ''
  const productData = await ProductService.getById(id)
  if (!productData) {
    return  router.push({
      name: 'NotFoundPage'
    })
  }

  const businessData = await BusinessService.getById(productData.id)
  product.value = productData
  business.value = businessData
})
</script>