<template>
  <component :is="layout">
    <router-view :key="route.path" />
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
  const layout = route?.meta?.layout || 'Default'

  if (layout) {
    return `${layout}Layout`
  }
  return 'div';
})
</script>