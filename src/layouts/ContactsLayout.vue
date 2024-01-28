<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
  <main class="main-content">
    <RouterView />
  </main>
</template>

<style>
:root {
  --footer-height: 0;
}
</style>
