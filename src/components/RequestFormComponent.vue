<script setup>
import { useVisibilityEffect } from "@/composables/useVisibilityEffect.js";
import { onMounted } from "vue";
import Splitting from "splitting";

useVisibilityEffect('[data-splitting]');

onMounted(() => {
  Splitting({ by: 'lines' });
})

</script>

<template>
  <div class="request-wrapper">
    <section class="request container">
      <h2 class="request__title" data-splitting>
        Оставить заявку на проект можно прямо на сайте
      </h2>

      <a href="/#contactForm" class="primary-button primary-button_white">Оставить заявку</a>

      <div class="request-decoration">
        <div class="triangle-tiles">
          <svg id="e2HbqIlpsMy1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335 331" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
            <g id="e2HbqIlpsMy3_tr" transform="translate(235.517498,321.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy7_tr" transform="translate(321.517498,239.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy11_tr" transform="translate(151.517498,321.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy15_tr" transform="translate(151.517498,238.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy19_tr" transform="translate(71.517498,318.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy23_tr" transform="translate(236.801003,240.371002) rotate(0)"><g transform="translate(-236.801003,-240.371002)"><path d="M206.516,247.397l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M218.145,258.057l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M229.775,270.656l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy27_tr" transform="translate(235.832504,154.119003) rotate(0)"><g transform="translate(-235.832504,-154.119003)"><path d="M205.547,161.146l37.311-37.312" fill="none" stroke="#fff" stroke-width="2"/><path d="M217.176,171.806l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M228.807,184.404l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy31_tr" transform="translate(110.112797,279.352509) rotate(0)"><g transform="translate(-110.112797,-279.352509)"><path d="M117.139,309.153L79.8276,271.842" fill="none" stroke="#fff" stroke-width="2"/><path d="M127.801,298.009L90.4898,260.698" fill="none" stroke="#fff" stroke-width="2"/><path d="M140.398,286.864l-37.311-37.312" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy35_tr" transform="translate(195.126503,280.62001) rotate(0)"><g transform="translate(-195.126503,-279.62001)"><path d="M202.152,309.42l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M212.814,298.276l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M225.412,287.131L188.101,249.82" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy39_tr" transform="translate(278.532997,281.527504) rotate(0)"><g transform="translate(-276.532997,-282.527504)"><path d="M283.559,312.328l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M294.221,301.183L256.91,263.872" fill="none" stroke="#fff" stroke-width="2"/><path d="M306.818,290.038l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy43_tr" transform="translate(280.410004,198.2145) rotate(0)"><g transform="translate(-280.410004,-198.2145)"><path d="M287.436,228.015l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M298.098,216.87l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M310.695,205.725l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy47_tr" transform="translate(194.425499,197.462997) rotate(0)"><g transform="translate(-194.425499,-197.462997)"><path d="M201.451,227.748L164.14,190.437" fill="none" stroke="#fff" stroke-width="2"/><path d="M212.113,216.118l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M224.711,204.489L187.4,167.178" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy51_tr" transform="translate(279.706505,113.149899) rotate(0)"><g transform="translate(-279.706505,-113.149899)"><path d="M286.732,143.435l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M297.395,131.805L260.084,94.4941" fill="none" stroke="#fff" stroke-width="2"/><path d="M309.992,120.176L272.681,82.8648" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy55_tr" transform="translate(323.517498,156.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy59_tr" transform="translate(321.517498,70.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy63_tr" transform="translate(318.517498,321.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g></svg>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.request {
  position: relative;
  padding-bottom: 268px;
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
  /*background-image: url("../assets/images/decorative/request-block-mobile-background.svg");*/
  /*border-right: 1px solid var(--white);*/
}

@media (min-width: 768px) {
  .request {
    padding-bottom: 100px;
    /*background-image: url("../assets/images/decorative/request-block-desktop-background.svg");*/
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
.visible.request__title::after {
  animation: slideFromBottom 1200ms;
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

.request-decoration {
  position: absolute;
  right: 0;
  bottom: 0;
}

</style>
