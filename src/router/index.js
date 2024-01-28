import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import {globalStore} from "@/store.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/engineering',
      name: 'engineering',
      component: () => import('../views/EngineeringView.vue')
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: () => import('../views/CooperationView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue'),
      meta: {

      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (globalStore.isMenuOpen) {
    globalStore.isMenuOpen = false;
    document.body.classList.remove('no-scroll');
  }
  next();
})

export default router
