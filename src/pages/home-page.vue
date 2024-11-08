<template>
  <CategoryList />
  <ProductList title="Новинки" linkFollow="/category" />
</template>

<script setup lang="ts">
import CategoryList from '../components/CategoryList.vue';
import ProductList from '../components/ProductList.vue'

</script>