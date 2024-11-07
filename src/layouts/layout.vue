<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Layout'
})
</script>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const layout = computed(() => {
  const layout = route?.meta?.layout

  if (layout) {
    return `${layout}Layout`
  }
  return 'div';
})
</script>