<script setup>
import { RouterView, useRoute } from 'vue-router';
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { computed } from "vue";

const route = useRoute();
const showFooter = computed(() => route.name !== 'contacts');
</script>

<template>
  <HeaderComponent />
  <main class="main-content">
    <RouterView />
  </main>
  <FooterComponent v-if="showFooter" />
</template>
