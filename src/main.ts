import { createApp } from 'vue'
import '@/style.css'
import { createPinia } from 'pinia'
import { router } from '@/core/router'
import { registerLayouts } from '@/layouts/register'
import App from '@/App.vue'

const app = createApp(App)
const pinia = createPinia()

app
.use(pinia)
.use(router)
.use(registerLayouts)
.mount('#app')
