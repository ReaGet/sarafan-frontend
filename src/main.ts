import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import { router } from './lib/router'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app
.use(pinia)
.use(router)
.mount('#app')
