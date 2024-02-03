import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FollowMouseDirective from "@/directives/FollowMouse.js"
import FloatingStickyDirective from "@/directives/FloatingSticky.js"

const app = createApp(App)

app.use(router)

app.directive('follow-mouse', FollowMouseDirective)
app.directive('floating-sticky', FloatingStickyDirective)

app.mount('#app')
