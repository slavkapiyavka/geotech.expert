<script setup lang="js">
import RequestFormComponent from "@/components/RequestFormComponent.vue";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent.vue";
import { onMounted, ref } from "vue";

const pageTitle = ref('Проекты');

onMounted(() => {
  document.title = `${pageTitle.value} | Геотехзащита`;
})
</script>

<template>
  <BreadcrumbsComponent :page-title="pageTitle" />
  <RequestFormComponent />
</template>

<style scoped>

</style>
