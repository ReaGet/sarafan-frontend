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
// import CategoryList from '../components/CategoryList.vue'
import ProductList from '../components/ProductList.vue'
import { Product } from '../types/product';
import { ProductRepository } from '../repositories/product';
import { FetchClient } from '../api';

const products = ref<Product[]>([])
const productRepository = new ProductRepository(new FetchClient())

const getProducts = async (): Promise<Product[]> => {
  return productRepository.getAll<Product>()
  .then(data => data.results)
}

onMounted(async () => {
  products.value = await getProducts()
})

</script>