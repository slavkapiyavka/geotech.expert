<script setup>
</script>

<template>
  <div class="hero-wrapper background-color-white">
    <section class="hero index container">
      <span class="hero__decorative-title">Проектный инжиниринг</span>
      <h1 class="hero__title decoration-line">Геотехзащита</h1>
      <p class="hero__subtitle">Проектирование под ключ, на основе технического задания и действующих нормативных
        документов </p>

      <picture class="hero__picture">
        <source srcset="../assets/images/pages/index/hero-1920.png" media="(min-width: 1920px)">
        <source srcset="../assets/images/pages/index/hero-1440.png" media="(min-width: 1440px)">
        <source srcset="../assets/images/pages/index/hero-1024.png" media="(min-width: 1024px)">
        <source srcset="../assets/images/pages/index/hero-768.png" media="(min-width: 768px)">
        <img width="150" height="190" class="hero__image" src="../assets/images/pages/index/hero-375.png" alt="Изображение строительной техники" loading="lazy">
      </picture>

      <a href="#contactForm" class="primary-button primary-button_orange">Начать проект</a>

      <div class="background-shape index"></div>
    </section>
  </div>
</template>
