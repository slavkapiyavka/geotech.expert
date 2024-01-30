<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import ContactsLayout from '@/layouts/ContactsLayout.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import NotFoundLayout from '@/layouts/NotFoundLayout.vue'

const isOverlayVisible = ref(false)
const overlayDelay = 2000
const route = useRoute()
const router = useRouter()

const layout = computed(() => {
  if (route.name === 'contacts') {
    return ContactsLayout
  } else if (route.name === 'notFound') {
    return NotFoundLayout
  } else {
    return BaseLayout
  }
})

router.beforeEach((to, from, next) => {
  isOverlayVisible.value = true
  document.documentElement.classList.add('no-scroll')
  document.body.setAttribute('inert', '')
  setTimeout(() => {
    next()
  }, 500)
})

router.afterEach(() => {
  setTimeout(() => {
    isOverlayVisible.value = false
    document.documentElement.classList.remove('no-scroll')
    document.body.removeAttribute('inert')
  }, overlayDelay)
})
</script>

<template>
  <div id="page-overlay" :class="[ isOverlayVisible ? 'visible' : 'initial']"></div>
  <component :is="layout" :key="route.path" />
</template>
