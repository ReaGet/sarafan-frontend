<template>
  <HeaderProfile />
  <slot />
  <Navigation />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfileLayout'
})
</script>

<script setup lang="ts">
import HeaderProfile from '../components/HeaderProfile.vue'
import Navigation from '../components/Navigation.vue'
</script>