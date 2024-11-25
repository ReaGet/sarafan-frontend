<template>
  <Section class="rounded-b-3xl">
    <div class="flex justify-between items-center">
      <h2 class="text-[2rem] font-bold">Продукты</h2>
      <RouterLink :to="{ name: 'ProfileCreateProductPage' }">
        <Button class="h-auto py-2 text-[1.4rem] rounded-xl">
          <PlusIcon className="mr-2" :size="16" />
          Добавить
        </Button>
      </RouterLink>
    </div>

    <RouterLink
      v-for="product in products"
      :key="product.id"
      :to="{
        name: 'ProfileEditProductPage',
        params: { productId: product.id }
      }"
      class="flex flex-col mt-12"
    >
      <div class="flex items-center">
        <div class="w-[48px] h-[48px] rounded-xl overflow-hidden">
          <Image className="w-full h-full object-cover" src="/images/profil2e.jpg" alt="" width="48" height="48" />
        </div>
        <span class="ml-6 text-[1.6rem]">{{ product.name }}</span>
        <ArrowIcon className="ml-auto text-gray-dark" />
      </div>
    </RouterLink>
  </Section>
  <Separator />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import Section from '@/components/ui/Section.vue'
import Separator from '@/components/ui/Separator.vue'
import { Product } from '@/core/entities/Product'
import ProductService from '@/services/ProductService'
import Image from '@/components/ui/Image.vue'

const props = defineProps<{
  businessId: string
}>()
const products = ref<Product[]>([])

onMounted(async () => {
  products.value = (await ProductService.getAllByBusinessId(props.businessId!))?.results || []
})

</script>