<template>
  <Header />
  <slot />
  <Navigation />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout'
})
</script>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
</script>