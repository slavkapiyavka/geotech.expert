<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import ContactsLayout from "@/layouts/ContactsLayout.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import NotFoundLayout from "@/layouts/NotFoundLayout.vue";

const route = useRoute();

const layout = computed(() => {
  if(route.name === 'contacts') {
    return ContactsLayout;
  } else if(route.name === 'notFound') {
    return NotFoundLayout;
  } else {
    return BaseLayout;
  }
})
</script>

<template>
  <component :is="layout" />
</template>
