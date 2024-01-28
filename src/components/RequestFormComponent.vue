<script setup>

</script>

<template>
  <div class="request-wrapper">
    <section class="request container">
      <h2 class="request__title">
        Оставить заявку на проект можно прямо на сайте
      </h2>

      <a href="/#contactForm" class="primary-button primary-button_white">Оставить заявку</a>
    </section>
  </div>
</template>

<style scoped>
.request {
  padding-bottom: 268px;
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../assets/images/decorative/request-block-mobile-background.svg");
  border-right: 1px solid var(--white);
}

@media (min-width: 768px) {
  .request {
    padding-bottom: 100px;
    background-image: url("../assets/images/decorative/request-block-desktop-background.svg");
  }
}

@media (min-width: 1440px) {
  .request {
    padding-bottom: 140px;
  }
}

@media (min-width: 1920px) {
  .request {
    padding-bottom: 184px;
  }
}

.request-wrapper {
  color: var(--white);
  background-color: var(--dark-blue);
}

.request__title {
  max-width: 20ch;
  text-wrap: wrap;
  margin: 0 0 40px 0;
}

.request__title::after {
  content: '';
  display: inline-block;
  width: 36px;
  height: 1px;
  vertical-align: middle;
  background-color: var(--white);
}

@media (min-width: 768px) {
  .request__title {
    margin: 0 0 16px 0;
    max-width: 24ch;
  }

  .request__title::after {
    width: 60px;
  }
}

@media (min-width: 1024px) {
  .request__title::after {
    width: 65px;
  }
}

@media (min-width: 1440px) {
  .request__title::after {
    width: 90px;
    height: 2px;
  }
}

@media (min-width: 1920px) {
  .request__title {
    margin: 0 0 40px 0;
  }

  .request__title::after {
    width: 120px;
  }
}

</style>
