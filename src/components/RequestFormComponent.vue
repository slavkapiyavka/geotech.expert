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

      <a
          href="/#contactForm"
          class="primary-button primary-button_white"
          v-follow-mouse
      >
        Оставить заявку
      </a>

      <div class="request-decoration animated-blocks">
        <div class="dynamic-lines">
          <svg width="331" height="332" viewBox="0 0 331 332" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g class="dynamic-lines__group" clip-path="url(#clip0_1043_3246)">
              <path d="M-499.5 -327.506L-514 -342.006M-478.494 -306.506L-491.994 -320.006M-340.518 -168.5L-309.518 -137.5M428.981 601L-125.519 46.4998M-294.519 -122.5L-251.019 -79.0003M-235.519 -63.5005L-192.519 -20.5002M-177.019 -5.00049L-137.519 34.4998M-522 -350.006L-536 -364.006M-543 -371.006L-556 -384.006M-470.488 -298.5L-451.488 -279.5M-351.988 -180L-377.488 -205.5M-388 -216.012L-411.988 -240M-423 -251.012L-443.5 -271.512" stroke="white" stroke-width="2" />
              <path d="M-202 54.6353L-234.635 21.9999M-388.5 -131.865L-410.634 -154M-349.635 -93.0001L-379.134 -122.5M-338.635 -82.0001L-295 -38.3655M-283.5 -26.8655L-248 8.63452M405.5 662.135L-190 66.6353M-418.499 -161.865L-438.999 -182.365M-543 -286.365L-557.635 -301M-564.635 -308L-581 -324.365M-534.635 -278L-518 -261.365M-446.5 -189.866L-463.5 -206.866M-470 -213.366L-487 -230.366M-494.5 -237.866L-510.634 -254" stroke="white" stroke-width="2" />
              <path d="M169.701 -2.5L125 -47.2009M-212.3 -384.5L-180.5 -352.7M-165.8 -338L-128.15 -300.35M-115.8 -288L-71.4998 -243.7M-54.4998 -226.7L-12.2994 -184.5M4.00024 -168.2L49.5002 -122.701M63.2009 -109L107.701 -64.5M620 447.799L184.701 12.5M-367.3 -539.5L-352.5 -524.7M-343.3 -515.5L-328.5 -500.7M-318.5 -490.7L-303.3 -475.5M-294.3 -466.5L-278 -450.2M-266.5 -438.7L-250.5 -422.7M-240.3 -412.5L-221.3 -393.5" stroke="white" stroke-width="2" />
              <path d="M-374.243 -375L-357.743 -358.5M-333.243 -334L-347.743 -348.5M-299.896 -300.5L-272.896 -273.501M-252.955 -253.501L-221.049 -221.501M-203.101 -203.501L-170.198 -170.501M-150.755 -151.001L-107.756 -108.001M609.5 609.251L27.9952 27.751M-90.7557 -91.0006L-48.5049 -48.7495M-31.0049 -31.2494L13.7437 13.4994M-324.5 -325.239L-310 -310.709" stroke="white" stroke-width="2" />
              <path d="M-189 -450L-153.069 -414.069M-137 -398L-102.57 -363.57M112.5 -148.5L68.5 -192.5M-89 -350L-49 -310M-35.5703 -296.57L1 -260M13.5 -247.5L54.5 -206.5M607.5 346.5L125 -136M-381.5 -642.5L-372 -633M-200.5 -461.5L-216.5 -477.5M-225 -486L-240.5 -501.5M-248 -509L-264 -525M-271 -532L-284.5 -545.5M-293 -554L-306.5 -567.5M-315.5 -576.5L-328 -589M-337 -598L-350 -611M-357 -618L-366 -627" stroke="white" stroke-width="2" />
              <path d="M-438 -352L-452.5 -366.5M-428 -342L-413 -327M-269 -183L-233.612 -147.612M-215.112 -129.112L-173 -87M533 619L13.5 99.5M-159 -73L-114 -28M-95.5 -9.5L-50.25 35.75M-35 51L3 89M-403.5 -317.5L-386 -300M-281 -195L-308.5 -222.5M-320 -234L-333 -247M-378.5 -292.5L-364 -278M-354 -268L-341 -255" stroke="white" stroke-width="2" />
              <path d="M-292.5 -376.765L-307.735 -392L-314.618 -398.882M-280.523 -364.788L-247.023 -331.288M-227.523 -311.788L-194.523 -278.788M-180.523 -264.788L-147.523 -231.788M-133.023 -217.288L-96.735 -181M-83.2349 -167.5L-37.7349 -122M-21.2347 -105.5L20.4777 -63.7874M35.4777 -48.7878L73.4777 -10.7878M88.4777 4.21222L123 38.7345M174.266 90.0001L136 51.7345M185.277 101L598.777 514.5M-385.735 -470L-372.5 -456.765M-365.735 -450L-351.5 -435.765M-342.235 -426.5L-327.5 -411.765L-324 -408.265" stroke="white" stroke-width="2" />
            </g>
            <defs>
              <clipPath id="clip0_1043_3246">
                <rect width="331" height="332" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div class="triangle-tiles">
          <svg id="e2HbqIlpsMy1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335 331" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
            <path d="M 332 335 L 0 334 L 336 0 v 332 Z" fill="transparent" stroke="#fff" stroke-width="1"/>
            <g id="e2HbqIlpsMy3_tr" transform="translate(235.517498,321.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy7_tr" transform="translate(321.517498,239.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy11_tr" transform="translate(151.517498,321.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy15_tr" transform="translate(151.517498,238.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy19_tr" transform="translate(71.517498,318.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy23_tr" transform="translate(236.801003,240.371002) rotate(0)"><g transform="translate(-236.801003,-240.371002)"><path d="M206.516,247.397l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M218.145,258.057l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M229.775,270.656l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy27_tr" transform="translate(235.832504,154.119003) rotate(0)"><g transform="translate(-235.832504,-154.119003)"><path d="M205.547,161.146l37.311-37.312" fill="none" stroke="#fff" stroke-width="2"/><path d="M217.176,171.806l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M228.807,184.404l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy31_tr" transform="translate(110.112797,279.352509) rotate(0)"><g transform="translate(-110.112797,-279.352509)"><path d="M117.139,309.153L79.8276,271.842" fill="none" stroke="#fff" stroke-width="2"/><path d="M127.801,298.009L90.4898,260.698" fill="none" stroke="#fff" stroke-width="2"/><path d="M140.398,286.864l-37.311-37.312" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy35_tr" transform="translate(195.126503,280.62001) rotate(0)"><g transform="translate(-195.126503,-279.62001)"><path d="M202.152,309.42l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M212.814,298.276l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M225.412,287.131L188.101,249.82" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy39_tr" transform="translate(278.532997,281.527504) rotate(0)"><g transform="translate(-276.532997,-282.527504)"><path d="M283.559,312.328l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M294.221,301.183L256.91,263.872" fill="none" stroke="#fff" stroke-width="2"/><path d="M306.818,290.038l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy43_tr" transform="translate(280.410004,198.2145) rotate(0)"><g transform="translate(-280.410004,-198.2145)"><path d="M287.436,228.015l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M298.098,216.87l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M310.695,205.725l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy47_tr" transform="translate(194.425499,197.462997) rotate(0)"><g transform="translate(-194.425499,-197.462997)"><path d="M201.451,227.748L164.14,190.437" fill="none" stroke="#fff" stroke-width="2"/><path d="M212.113,216.118l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M224.711,204.489L187.4,167.178" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy51_tr" transform="translate(279.706505,113.149899) rotate(0)"><g transform="translate(-279.706505,-113.149899)"><path d="M286.732,143.435l-37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M297.395,131.805L260.084,94.4941" fill="none" stroke="#fff" stroke-width="2"/><path d="M309.992,120.176L272.681,82.8648" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy55_tr" transform="translate(323.517498,156.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy59_tr" transform="translate(321.517498,70.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g><g id="e2HbqIlpsMy63_tr" transform="translate(318.517498,321.432991) rotate(0)"><g transform="translate(-151.517498,-238.432991)"><path d="M121.232,245.459l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M132.861,256.119l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/><path d="M144.492,268.718l37.311-37.311" fill="none" stroke="#fff" stroke-width="2"/></g></g></svg>
        </div>

        <div class="dynamic-rect-wrapper">
          <div class="dynamic-rect">
            <div class="dynamic-rect__square"></div>
            <div class="dynamic-rect__square"></div>
            <div class="dynamic-rect__square"></div>
            <div class="dynamic-rect__square"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.request {
  overflow: hidden;
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
