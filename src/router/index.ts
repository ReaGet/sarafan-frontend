import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../pages/home-page.vue'),
  },
  {
    path: '/p/:id',
    name: 'ProductPage',
    component: () => import('../pages/product-page.vue'),
  },
  {
    path: '/business/:id',
    name: 'BusinessPage',
    component: () => import('../pages/business-page.vue'),
  },
  {
    path: '/me',
    children: [
      {
        path: '',
        name: 'ProfilePage',
        component: () => import('../pages/profile/index.vue'),
      },
      {
        path: 'business',
        name: 'ProfileBusinessPage',
        component: () => import('../pages/profile/business-page.vue'),
        meta: {
          layout: 'Profile',
          title: 'Бизнесы'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: () => import('../pages/not-found-page.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})