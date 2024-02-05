<script setup lang="js">
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent.vue";
import { onMounted, ref } from 'vue';
import {useVisibilityEffect} from "@/composables/useVisibilityEffect.js";

const pageTitle = ref('О компании');

useVisibilityEffect('.reveal');

onMounted(() => {
  document.title = `${pageTitle.value} | Геотехзащита`;
});
</script>

<template :key="pageTitle">
  <BreadcrumbsComponent class="reveal reveal_left" :page-title="pageTitle"/>

  <div class="hero-container">
    <section class="hero container contacts-page">
      <h1 class="hero__title reveal reveal_left">Контакты</h1>
      <div class="background-shape contacts-page"></div>
    </section>
  </div>

  <div class="contacts-wrapper">
    <div class="contacts container">
      <h2 class="contacts__title font-text">Сотрудничество</h2>

      <ul class="contacts-list">
        <li class="contact">
          <a class="contact__link heading-second" href="tel:8800752108">8 (800) 75 21 08</a>
        </li>
        <li class="contact">
          <a class="contact__link heading-second" href="mailto:office@geotech.expert">office@geotech.expert</a>
        </li>
        <li class="contact">
          <a class="contact__link heading-second" href="https://yandex.ru/maps/-/CDq2IN5C" target="_blank">г. Энгельс, пр-т
            Химиков 17</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.contacts {
  display: grid;
  grid-auto-flow: row;
  gap: 60px;
  margin-bottom: 80px;
}

@media (min-width: 768px) {
  .contacts {
    grid-auto-flow: column;
  }
}

.contacts-wrapper {
  background-color: var(--dark-blue);
  color: var(--white);
}

.contacts__title {
  font-weight: 300;
  margin: 0;
}

.contact__link {
  color: var(--white);
  text-decoration: none;
}

.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (min-width: 768px) {
  .contacts-list {
    gap: 28px;
  }
}

@media (min-width: 1440px) {
  .contacts-list {
    gap: 22px;
  }
}

@media (min-width: 1920px) {
  .contacts-list {
    gap: 30px;
  }
}
</style>
