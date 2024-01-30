import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FollowMouseDirective from "@/directives/FollowMouse.js";

const app = createApp(App)

app.use(router)

app.directive('follow-mouse', FollowMouseDirective)

app.mount('#app')
