import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import { router } from './router'
import { registerLayouts } from './layouts/register'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

console.log(import.meta.env.BASE_API)

app
.use(pinia)
.use(router)
.use(registerLayouts)
.mount('#app')
