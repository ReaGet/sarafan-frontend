import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/pages/home-page.vue'),
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: () => import('@/pages/product-page.vue'),
    props: true
  },
  {
    path: '/business/:id',
    name: 'BusinessPage',
    component: () => import('@/pages/business-page.vue'),
    props: true
  },
  {
    path: '/me',
    children: [
      {
        path: '',
        name: 'ProfilePage',
        component: () => import('@/pages/profile/index.vue'),
      },
      {
        path: 'business',
        name: 'ProfileBusinessPage',
        component: () => import('@/pages/profile/business-page.vue'),
        meta: {
          layout: 'Profile',
          title: 'Бизнесы'
        },
        children: [
          {
            path: 'create',
            name: 'ProfileCreateBusinessPage',
            component: () => import('@/pages/profile/create-business-page.vue'),
            meta: {
              layout: 'Profile',
              title: 'Создание бизнеса'
            }
          }
        ]
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: () => import('@/pages/not-found-page.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})