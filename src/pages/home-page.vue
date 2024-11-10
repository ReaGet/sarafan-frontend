<template>
  <Section className="py-0">
    <CategoryList />
    <ProductList title="Новинки" linkFollow="/category" />
  </Section>
</template>

<script setup lang="ts">
// import { onMounted } from 'vue'
import Section from '../components/Section.vue'
import CategoryList from '../components/CategoryList.vue'
import ProductList from '../components/ProductList.vue'

// onMounted(() => {
//   fetch('https://sarafanweb.ru/api/products/')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })
// })

</script>