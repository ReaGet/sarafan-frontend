<template>
    <div class="app-container">
        <div class="products-tile">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
</template>

<script setup lang="ts">
    import ProductCard from './ProductCard.vue'
</script>

<style lang="scss" scoped>
    .products-tile {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        width: 100%;
    }
</style>