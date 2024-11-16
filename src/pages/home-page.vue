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
import { Product } from '../core/entities/Product'
import ProductService from '../services/ProductService'

const products = ref<Product[]>([])

onMounted(async () => {
  products.value = (await ProductService.getAll()).results
})

</script>