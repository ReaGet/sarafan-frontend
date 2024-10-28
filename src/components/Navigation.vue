<template>
  <nav class="fixed flex items-center justify-between w-full px-6 pb-6 bottom-0 text-[1.2rem] text-gray-dark transition-colors">
    <RouterLink
      v-for="item in navivationItems" :key="item.icon"
      class="flex flex-col items-center justify-center hover:text-black/70"
      active-class="text-primary"
      :to="item.link"
    >
      <div class="w-[24px] h-[24px] rounded bg-current"></div>
      {{ item.label }}
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { NavigationItem } from '../types/navigation'
import { RouterLink } from 'vue-router';

const navivationItems: NavigationItem[] = [
  { link: '/', icon: 'home', label: 'Главная' },
  { link: '/search', icon: 'search', label: 'Поиск' },
  { link: '/favorites', icon: 'favorites', label: 'Избранное' },
  { link: '/me', icon: 'profile', label: 'Профиль' },
]
</script>