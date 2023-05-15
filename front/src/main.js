import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Socketio from '@/plugins/socket'

createApp(App)
    .use(router)
    .mount('#app')
