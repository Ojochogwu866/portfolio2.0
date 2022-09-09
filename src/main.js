import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/tailwind.css'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import * as apolloProvider from './apollo.provider'


createApp(App).use(store).use(ElementUI).use(router).use(apolloProvider.provider).mount('#app')
