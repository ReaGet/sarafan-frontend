<template>
  <Section className="py-0">
    <!-- <CategoryList /> -->
    <ProductList
      title="Новинки"
      linkFollow="/category"
      :products="products"
    />
  </Section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Section from '../components/Section.vue'
import CategoryList from '../components/CategoryList.vue'
import ProductList from '../components/ProductList.vue'
import { Product } from '../types/product';

const products = ref<Product[]>([])

const getProducts = async (): Promise<Product[]> => {
  return fetch(`${import.meta.env.VITE_BASE_API}/products/`)
  .then(res => res.json())
  .then(data => data.results)
}

onMounted(async () => {
  products.value = await getProducts()
})

</script>