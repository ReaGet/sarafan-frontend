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
    path: '/cart/',
    name: 'CartPage',
    component: () => import('@/pages/cart-page.vue'),
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
        name: 'ProfileAllBusinessPage',
        component: () => import('@/pages/profile/all-businesses-page.vue'),
        meta: {
          layout: 'Profile',
          title: 'Бизнесы'
        },
      },
      {
        path: 'business/create',
        name: 'ProfileCreateBusinessPage',
        component: () => import('@/pages/profile/create-business-page.vue'),
        meta: {
          layout: 'Profile',
          title: 'Создание бизнеса'
        }
      },
      {
        path: 'business/:businessId',
        name: 'ProfileBusinessPage',
        component: () => import('@/pages/profile/business-page.vue'),
        meta: {
          layout: 'Profile',
          title: 'Бизнес'
        },
        props: true
      },
      {
        path: 'business/:businessId/create',
        name: 'ProfileCreateProductPage',
        component: () => import('@/pages/profile/create-product-page.vue'),
        meta: {
          layout: 'Profile',
          title: 'Создание товара'
        },
        props: true,
      },
      {
        path: 'business/:businessId/edit/:productId',
        name: 'ProfileEditProductPage',
        component: () => import('@/pages/profile/edit-product-page.vue'),
        meta: {
          layout: 'Profile',
          title: 'Редактирование продукт'
        },
        props: true,
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