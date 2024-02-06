<script setup>
import { useRoute, useRouter } from 'vue-router'
import {computed, onMounted, onUnmounted, reactive, ref} from 'vue'
import ContactsLayout from '@/layouts/ContactsLayout.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import NotFoundLayout from '@/layouts/NotFoundLayout.vue'
import { globalStore } from "@/store.js";

const isOverlayVisible = ref(false)
const overlayDelay = 1250
const route = useRoute()
const router = useRouter()
const cursor = ref()
const cursorState = reactive({
  isInteractive: false,
  isVisible: false
})
const interactiveDOMElements = ['A', 'BUTTON', 'INPUT', 'LABEL', 'TEXTAREA']

const layout = computed(() => {
  if (route.name === 'contacts') {
    return ContactsLayout
  } else if (route.name === 'notFound') {
    return NotFoundLayout
  } else {
    return BaseLayout
  }
})

const moveSquare = (x, y) => {
  if (cursor.value) {
    const targetElement = document.elementFromPoint(x, y);
    cursorState.isInteractive = targetElement && interactiveDOMElements.includes(targetElement.tagName)
    cursor.value.style.transform = `translate(${x - 16}px, ${y - 16}px)`
  }
}

const handleMouseMove = (e) => {
  moveSquare(e.clientX, e.clientY)
}

const handleMouseLeave = () => {
  cursorState.isVisible = false
}

const handleMouseEnter = () => {
  cursorState.isVisible = true
}

const handleMouseDown = (e) => {
  if (interactiveDOMElements.includes(e.target.tagName)) {
    cursor.value.style.transform = 'scale(0.8)'
  }
}

const handleMouseUp = () => {
  cursor.value.style.transform = 'scale(1)'
}

router.beforeEach((to, from, next) => {
  if(isOverlayVisible.value) {
    isOverlayVisible.value = false
  }

  if (globalStore.isMenuOpen) {
    globalStore.isMenuOpen = false;
    document.body.classList.remove('no-scroll');
  }

  if(!to.hash) {
    // document.documentElement.classList.add('no-scroll')
    // document.body.setAttribute('inert', '')
    setTimeout(() => {
      next()
    }, 50)
  } else {
    next();
  }
})

router.afterEach(() => {
  document.documentElement.classList.remove('no-scroll')
  document.body.removeAttribute('inert')
  if(isOverlayVisible.value) {
    setTimeout(() => {
      isOverlayVisible.value = false
    }, overlayDelay)
  }
})

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);
  document.addEventListener('mouseenter', handleMouseEnter);
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseleave', handleMouseLeave);
  document.removeEventListener('mouseenter', handleMouseEnter);
  document.removeEventListener('mousedown', handleMouseDown);
  document.removeEventListener('mouseup', handleMouseUp);
})
</script>

<template>
  <component :is="layout" :key="route.path" />
  <div v-if="cursorState.isVisible" class="cursor" :class="{ 'interactive': cursorState.isInteractive }" ref="cursor"></div>
  <div id="page-overlay" :class="[ isOverlayVisible ? 'visible' : 'initial']"></div>
</template>
