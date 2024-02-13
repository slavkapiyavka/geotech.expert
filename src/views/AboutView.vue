<script setup>
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent.vue";
import RequestFormComponent from "@/components/RequestFormComponent.vue";
import { onMounted, ref } from 'vue';
import { useVisibilityEffect } from "@/composables/useVisibilityEffect.js";
import Splitting from "splitting";

const pageTitle = ref('О компании');

useVisibilityEffect('.reveal');
useVisibilityEffect('[data-splitting]');

onMounted(() => {
  document.title = `${pageTitle.value} | Геотехзащита`;
  Splitting({ by: 'lines' });
});
</script>

<template :key="pageTitle">
  <BreadcrumbsComponent class="reveal reveal_left" :page-title="pageTitle"/>

  <div class="hero-container background-color-white">
    <section class="hero about container">
      <h1 class="hero__title reveal reveal_left">О компании</h1>
      <p class="hero__subtitle reveal reveal_left">
        Проектирование с использованием новейших технологий, подтвержденных на практике
      </p>
      <div class="background-shape about-page"></div>
    </section>
  </div>

  <div class="introduction-wrapper background-color-orange" v-adjust-top>
    <section class="introduction about container">
      <h2 class="introduction__title" data-splitting>
        Наша команда способна эффективно решать сложные задачи и создавать уникальные проекты для каждого клиента
      </h2>

      <section class="manager reveal reveal_right">
        <img src="../assets/images/manager.jpg" width="105" height="105" alt="Фотография генерального директора - Денис Дейнеко" class="manager__image" loading="lazy">
        <p class="manager__bio">
          <span class="manager__name">Денис Дейнеко</span>
          <span class="manager__position">генеральный директор</span>
        </p>

        <span class="manager__quote">
          «Мы гордимся тем, что каждый специалист нашей команды обладает профессионализмом и опытом, которые позволяют нам реализовывать сложные технические решения»
        </span>
      </section>

    </section>
  </div>

  <div class="engineering-wrapper">
    <section class="engineering container">
      <h2 class="engineering__title" data-splitting>Грамотное проектирование</h2>
      <p class="engineering__subtitle reveal reveal_bottom">
        Применение современных материалов и технологий позволяет:
      </p>

      <ul class="engineering-list">
        <li class="engineering-list__element reveal reveal_bottom">
          <p class="heading-fifth">Упрощать строительство</p>
        </li>
        <li class="engineering-list__element reveal reveal_bottom">
          <p class="heading-fifth">Увеличивать надежность</p>
        </li>
        <li class="engineering-list__element reveal reveal_bottom">
          <p class="heading-fifth">Повышать экономическую эффективность</p>
        </li>
      </ul>
      <picture>
        <source srcset="../assets/images/pages/about/engineering-1920.png" media="(min-width: 1920px)">
        <source srcset="../assets/images/pages/about/engineering-1440.png" media="(min-width: 1440px)">
        <source srcset="../assets/images/pages/about/engineering-1024.png" media="(min-width: 1024px)">
        <source srcset="../assets/images/pages/about/engineering-768.png" media="(min-width: 768px)">
        <img class="engineering__image" src="../assets/images/pages/about/engineering-375.png" alt="Изображение строительной техники" loading="lazy">
      </picture>
    </section>
  </div>

  <div class="licenses-wrapper background-color-white">
    <section class="licenses container">
      <h2 class="licenses__title" data-splitting>Лицензия</h2>
      <p class="licenses__description reveal reveal_bottom">
        У нас есть все необходимые допуски СРО для осуществления профессиональной деятельности
      </p>

      <ul class="licenses-list">
        <li class="license reveal reveal_right">
          <a href="../assets/documents/cpo_16_10_2023.pdf" class="license__link" target="_blank">
            <p class="license__name">CPO</p>
            <p class="license__info">
              <span class="license__format">PDF</span>
              <span class="license__size">458KB</span>
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>

  <RequestFormComponent />
</template>

<style scoped>
.licenses {
  overflow-x: hidden;
}

.licenses__title {
  margin: 0 0 8px 0;
  font-family: var(--font-bebas-neue);
  font-size: var(--font-h3-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h3-line-height);
  letter-spacing: var(--font-h3-letter-spacing);
}

.licenses__description {
  margin: 0 0 40px 0;
  max-width: 44ch;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text1-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text1-line-height);
  letter-spacing: var(--font-text1-letter-spacing);
}

.licenses-list {
  display: flex;
  flex-direction: column;
}

/* manager block start */
.manager {
  display: grid;
  grid-template-areas: 'image' 'bio' 'quote';
  gap: 8px;
}

@media (min-width: 768px) {
  .manager {
    grid-template-areas: 'image bio' 'image quote';
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr;
    gap: 10px 16px;
  }
}

@media (min-width: 1440px) {
  .manager {
    gap: 16px;
  }
}

@media (min-width: 1920px) {
  .manager {
    gap: 20px;
  }
}

@media (min-width: 1024px) {
  .manager {
    margin-left: auto;
  }
}

.manager__image {
  --manager-image-size: 105px;

  grid-area: image;
  min-width: var(--manager-image-size);
  width: var(--manager-image-size);
  min-height: var(--manager-image-size);
  height: var(--manager-image-size);
  border-radius: var(--manager-image-size);
  object-fit: cover;
}

@media (min-width: 768px) {
  .manager__image {
    --manager-image-size: 148px;
  }
}

@media (min-width: 1440px) {
  .manager__image {
    --manager-image-size: 142px;
  }
}

@media (min-width: 1920px) {
  .manager__image {
    --manager-image-size: 190px;
  }
}

.manager__bio {
  grid-area: bio;
  display: flex;
  flex-direction: column;
  margin: 0;
}

.manager__name {
  margin: 0;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text1-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text1-line-height);
  letter-spacing: var(--font-text1-letter-spacing);
  color: var(--white);
}

.manager__position {
  margin: 0;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text2-line-height);
  letter-spacing: var(--font-text2-letter-spacing);
  color: var(--white-60);
}

.manager__quote {
  grid-area: quote;
  margin: 0;
  max-width: 356px;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text2-line-height);
  letter-spacing: var(--font-text2-letter-spacing);
  color: var(--white);
}

@media (min-width: 768px) {
  .manager__quote {
    max-width: 322px;
  }
}

@media (min-width: 1440px) {
  .manager__quote {
    max-width: 370px;
  }
}

@media (min-width: 1920px) {
  .manager__quote {
    max-width: 492px;
  }
}
/* manager block end */

.engineering {
  padding-bottom: 10px;
}

@media (min-width: 768px) {
  .engineering {
    padding-bottom: 20px;
  }
}

@media (min-width: 1440px) {
  .engineering {
    padding-bottom: 30px;
  }
}

@media (min-width: 1920px) {
  .engineering {
    padding-bottom: 40px;
  }
}

.engineering-wrapper {
  background-color: var(--beige);
}

.engineering__title {
  margin: 0;
  font-family: var(--font-bebas-neue);
  font-size: var(--font-h2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h2-line-height);
  letter-spacing: var(--font-h2-letter-spacing);
}

.engineering__subtitle {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text1-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text1-line-height);
  letter-spacing: var(--font-text1-letter-spacing);
  margin: 0 0 40px;
  max-width: 32ch;
}

@media (min-width: 1440px) {
  .engineering__subtitle {
    margin: 0 0 60px;
  }
}

@media (min-width: 1920px) {
  .engineering__subtitle {
    margin: 0 0 80px;
  }
}

.engineering-list {
  display: grid;
  grid-auto-flow: row;
  gap: 40px;
}

@media (min-width: 768px) {
  .engineering-list {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
}

@media (min-width: 1024px) {
  .engineering-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.engineering-list__element {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

@media (min-width: 768px) {
  .engineering-list__element {
    gap: 16px;
  }

  .engineering-list__element:nth-child(3n+3) {
    grid-column: 2 / -1;
  }
}

@media (min-width: 1024px) {
  .engineering-list__element:nth-child(3n+3) {
    grid-column: auto;
  }
}

@media (min-width: 1440px) {
  .engineering-list__element {
    gap: 20px;
  }
}

@media (min-width: 1920px) {
  .engineering-list__element {
    gap: 24px;
  }
}

.engineering-list__element::before {
  --decorative-icon-size: 40px;
  content: "";
  display: block;
  width: var(--decorative-icon-size);
  min-width: var(--decorative-icon-size);
  height: var(--decorative-icon-size);
  min-height: var(--decorative-icon-size);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

@media (min-width: 768px) {
  .engineering-list__element::before {
    --decorative-icon-size: 44px;
  }
}

@media (min-width: 1440px) {
  .engineering-list__element::before {
    --decorative-icon-size: 60px;
  }
}

@media (min-width: 1920px) {
  .engineering-list__element::before {
    --decorative-icon-size: 80px;
  }
}

.engineering-list__element:nth-child(3n+1)::before {
  background-color: var(--dark-blue);
}

.engineering-list__element:nth-child(3n+2)::before {
  background-image: url("../assets/icons/about/eng-decorative.svg");
}

.engineering-list__element:nth-child(3n+3)::before {
  background-image: url("../assets/icons/about/eng-decorative-third.svg");
}

.engineering-list__element p {
  color: var(--dark-blue);
}

.engineering__image {
  padding-top: 80px;
}

@media (min-width: 768px) {
  .engineering__image {
    padding-top: 100px;
  }
}

@media (min-width: 1024px) {
  .engineering__image {
    padding-top: 104px;
  }
}

@media (min-width: 1440px) {
  .engineering__image {
    padding-top: 140px;
  }
}

@media (min-width: 1920px) {
  .engineering__image {
    padding-top: 180px;
  }
}

.license {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -1px;
  padding: 16px 0;
  border-top: 1px solid var(--dark-blue);
  border-bottom: 1px solid var(--dark-blue);
  background-color: transparent;
  transition: background-color 125ms, padding 275ms;
}

.license:hover {
  background-color: var(--dark-blue-10);
  padding: 16px;
}

.license.visible {
  animation: easeOutElastic 1450ms both;
}

@keyframes easeOutElastic {
  0% {
    opacity: 0;
    transform: translateX(36px);
  }

  50% {
    transform: translateX(-10px);
  }

  65% {
    transform: translateX(8px);
  }

  80% {
    opacity: 1;
    transform: translateX(-6px);
  }

  100% {
    transform: translateX(0px);
  }

}

@media (min-width: 768px) {
  .license {
    padding: 20px 0;
  }
  .license:hover {
     padding: 20px;
   }
}

@media (min-width: 1440px) {
  .license {
    padding: 30px 0;
  }
  .license:hover {
    padding: 30px;
  }
}

@media (min-width: 1920px) {
  .license {
    padding: 40px 0;
  }
  .license:hover {
    padding: 40px;
  }
}

.license__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-decoration: none;
}

.license__name {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  text-transform: uppercase;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-h5-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h5-line-height);
  letter-spacing: var(--font-h5-letter-spacing);
  color: var(--dark-blue);
}

.license__name::before {
  --document-icon-width: 24px;
  --document-icon-height: 32px;
  content: "";
  display: block;
  min-width: var(--document-icon-width);
  width: var(--document-icon-width);
  min-height: var(--document-icon-height);
  height: var(--document-icon-height);
  background: url("../assets/icons/document.svg") center / contain no-repeat;
}

@media (min-width: 1024px) {
  .license__name::before {
    --document-icon-width: 26px;
    --document-icon-height: 34px;
  }
}

@media (min-width: 1440px) {
  .license__name::before {
    --document-icon-width: 36px;
    --document-icon-height: 48px;
  }
}

@media (min-width: 1920px) {
  .license__name::before {
    --document-icon-width: 48px;
    --document-icon-height: 64px;
  }
}

@media (min-width: 768px) {
  .license__name {
    gap: 16px;
  }
}

@media (min-width: 1440px) {
  .license__name {
    gap: 20px;
  }
}

@media (min-width: 1920px) {
  .license__name {
    gap: 24px;
  }
}

.license__info {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text1-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text1-line-height);
  letter-spacing: var(--font-text1-letter-spacing);
  color: var(--dark-blue-50);
}

.license__info::after {
  --download-icon-size: 20px;

  content: "";
  display: block;
  margin-left: 4px;
  width: var(--download-icon-size);
  min-width: var(--download-icon-size);
  height: var(--download-icon-size);
  min-height: var(--download-icon-size);
  background: url("../assets/icons/download.svg") center / contain no-repeat;
}

@media (min-width: 768px) {
  .license__info::after {
    margin-left: 8px;
  }
}

@media (min-width: 1440px) {
  .license__info::after {
    --download-icon-size: 30px;
  }
}

@media (min-width: 1920px) {
  .license__info::after {
    --download-icon-size: 40px;
  }
  .license__info {
    gap: 8px;
  }
}
</style>
