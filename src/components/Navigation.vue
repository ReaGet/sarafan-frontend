<template>
  <nav class="fixed flex items-center justify-between w-full h-24 px-6 bottom-0 text-[1.2rem] text-gray-dark transition-colors shadow-sm bg-white z-10">
    <RouterLink
      v-for="{ icon, label, link } in navivationItems" :key="link"
      class="flex flex-col items-center justify-center hover:text-black/70"
      active-class="text-primary"
      :to="link"
    >
      <component :is="icon" :width="24" :height="24" />
      {{ label }}
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { NavigationItem } from '@/types/navigation'
import { RouterLink } from 'vue-router'
import HomeIcon from './icons/HomeIcon.vue'
import SearchIcon from './icons/SearchIcon.vue'
import HeartIcon from './icons/HeartIcon.vue'
import ProfileIcon from './icons/ProfileIcon.vue'
import CartIcon from '@/components/icons/CartIcon.vue'

const navivationItems: NavigationItem[] = [
  { link: '/', icon: HomeIcon, label: 'Главная' },
  { link: '/search', icon: SearchIcon, label: 'Поиск' },
  { link: '/cart', icon: CartIcon, label: 'Корзина' },
  { link: '/favorites', icon: HeartIcon, label: 'Избранное' },
  { link: '/me', icon: ProfileIcon, label: 'Профиль' },
]
</script>