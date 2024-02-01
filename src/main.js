import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FollowMouseDirective from "@/directives/FollowMouse.js"
import AdjustTopDirective from "@/directives/AdjustTop.js"

const app = createApp(App)

app.use(router)

app.directive('follow-mouse', FollowMouseDirective)
app.directive('adjust-top', AdjustTopDirective)

app.mount('#app')
