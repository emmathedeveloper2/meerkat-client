import './styles/base.css'
// Supports weights 100-900
import '@fontsource-variable/jost';
import '@fontsource/antic-didone';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
