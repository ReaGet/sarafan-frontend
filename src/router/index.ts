import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/home-page.vue'),
    meta: {
      layout: 'Default'
    }
  },
  {
    path: '/p/:id',
    name: 'ProductPage',
    component: () => import('../pages/product-page.vue'),
    meta: {
      layout: 'Default'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/not-found-page.vue'),
    meta: {
      layout: 'Default'
    }
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})