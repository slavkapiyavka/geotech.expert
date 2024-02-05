<script setup lang="js">
import {onMounted, ref} from "vue";
import Splitting from "splitting";
import RequestFormComponent from "@/components/RequestFormComponent.vue";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent.vue";
import {useVisibilityEffect} from "@/composables/useVisibilityEffect.js";

const pageTitle = ref('Проектирование');

onMounted(() => {
  document.title = `${pageTitle.value} | Геотехзащита`;

  Splitting({ by: 'lines' })
})

useVisibilityEffect('.animated-underline');
useVisibilityEffect('.work-documentation-list__element');
useVisibilityEffect('[data-splitting]');
</script>

<template>
  <BreadcrumbsComponent :page-title="pageTitle" />

  <div class="hero-container background-color-white">
    <section class="hero engineering container">
      <h1 class="hero__title">Проектирование</h1>
      <p class="hero__subtitle hero__subtitle_engineering">
        Выполнение полного спектра услуг для строительства или реконструкции объектов
      </p>

      <div class="background-shape engineering-page"></div>
    </section>
  </div>

  <div class="introduction-wrapper">
    <section class="introduction container">
      <h3 class="introduction__title" data-splitting>
        Команда проектировщиков готова подключиться к разработке на любом этапе
      </h3>
    </section>
  </div>

  <div class="research-wrapper background-color-white">
    <section class="research container">
      <h2 class="research__title container__title" data-splitting>Экономическое исследование</h2>
      <p class="research__subtitle container__subtitle">
        Для принятия инвестором решения о начале ведения и реализации проекта
      </p>

      <div class="research-list-wrapper">
        <span class="research-list-title">
          Целесообразность строительства определяется по результатам экономических изысканий:
        </span>

        <ul class="research-list">
          <li class="research-list__element">
            <span>
              Вариантное проектирование
            </span>
          </li>
          <li class="research-list__element">
            <span>
              Техникоэкономическое сравнение
            </span>
          </li>
          <li class="research-list__element">
            <span>
              Техникоэкономическое обоснование
            </span>
          </li>
        </ul>
      </div>
    </section>
  </div>

  <div class="surveys-wrapper background-color-white" v-adjust-top>
    <section class="surveys container">
      <h2 class="surveys__title container__title" data-splitting>Инженерные изыскания</h2>

      <ul class="surveys-list">
        <li class="surveys-list__element">
          <span class="survey__name">Экологические</span>
          <span class="survey__description">Исследование воздуха и вод на поверхности грунта</span>
        </li>
        <li class="surveys-list__element">
          <span class="survey__name">Геологические</span>
          <span class="survey__description">Информации о рельефе и ситуации местности</span>
        </li>
        <li class="surveys-list__element">
          <span class="survey__name">Гидрометеорологические</span>
          <span class="survey__description">Атмосферные условия</span>
        </li>
        <li class="surveys-list__element">
          <span class="survey__name">Геодезические</span>
          <span class="survey__description">Характер и рельеф местности</span>
        </li>
        <li class="surveys-list__element">
          <span class="survey__name">Геотехнические</span>
          <span class="survey__description">Изучение свойств различного типа грунтов</span>
        </li>
      </ul>
    </section>
  </div>

  <div class="sketch-design-wrapper background-color-beige">
    <section class="sketch-design container">
      <h2 class="sketch-design__title container__title" data-splitting>Эскизное <span></span>проектирование</h2>
      <p class="sketch-design__subtitle container__subtitle">
        Визуализация проекта, проработка вариантов решения без детализации
      </p>

      <ul class="sketch-design-list">
        <li class="sketch-design-list-element">
          <h3 class="sketch-design-list-element__title">
            Обсуждение с клиентом
          </h3>
          <p class="sketch-design-list-element__text">
            технических особенностей будущего объекта
          </p>
        </li>
        <li class="sketch-design-list-element">
          <h3 class="sketch-design-list-element__title">
            Изучение технического задания
          </h3>
          <p class="sketch-design-list-element__text">
            с целью соблюдения всех требований
          </p>
        </li>
        <li class="sketch-design-list-element">
          <h3 class="sketch-design-list-element__title">
            Результат
          </h3>
          <p class="sketch-design-list-element__text">
            заказчик получает в виде чертежей общего вида и пояснительную записку
          </p>
        </li>
        <li class="sketch-design-list-element">
          <p class="sketch-design-list-element__text result-text">
            После представления эскизного проекта и согласования его с клиентом работа переходит на следующий этап
          </p>
        </li>
      </ul>
    </section>
  </div>

  <div class="project-documentation-wrapper background-color-beige">
    <section class="project-documentation container">
      <h2 class="project-documentation__title container__title" data-splitting>Проектная документация</h2>
      <p class="project-documentation__subtitle container__subtitle">
        Прорабатываются основные проектные решения, подлежащие прохожению экспертизы
      </p>

      <div class="project-documentation-decorative">
        <p class="project-documentation-decorative__text">Содержит текстовую и графическую  часть</p>
        <div class="project-documentation-decorative__stripes-block"></div>
      </div>

      <p class="result-text">
        После положительного заключения экспертизы проект переходит на стадию разработки рабочей документации
      </p>
    </section>
  </div>

  <div class="work-documentation-wrapper background-color-orange">
    <section class="work-documentation container">
      <h2 class="work-documentation__title container__title" data-splitting>Рабочая документация</h2>
      <p class="work-documentation__subtitle container__subtitle">
        Детально проработанные проектные решения, на основании которых подрядчик может приступать к реализации
      </p>

      <ul class="work-documentation-list">
        <li class="work-documentation-list__element">
          <span class="solution-title">
            Смета
          </span>
          <span class="solution-text">
            Все расходы на строительство
          </span>
        </li>
        <li class="work-documentation-list__element">
          <span class="solution-title">
            Ведомость
          </span>
          <span class="solution-text">
            Объемов монтажных и строительных работ
          </span>
        </li>
        <li class="work-documentation-list__element">
          <span class="solution-title">
            Спецификации
          </span>
          <span class="solution-text">
            Необходимые оборудования и материалов
          </span>
        </li>
        <li class="work-documentation-list__element">
          <span class="solution-title">
            Пояснительная записка
          </span>
          <span class="solution-text">
            Обоснование принятых методов организации и технологии выполнения основных видов работ
          </span>
        </li>
        <li class="work-documentation-list__element">
          <span class="solution-title">
            Чертежи, таблицы, схема генерального плана
          </span>
        </li>
      </ul>
    </section>
  </div>

  <div class="expertise-wrapper background-color-white">
    <section class="expertise container">
      <h2 class="expertise__title container__title" data-splitting>Сопровождение экспертизы</h2>
      <p class="expertise__subtitle container__subtitle">
        Ведение проекта до получения положительного заключения экспертизы проектной документации
      </p>

      <ol class="expertise-list">
        <li class="expertise-list__element animated-underline">
          <span>
            Оперативное устранение замечаний
          </span>
        </li>
        <li class="expertise-list__element animated-underline">
          <span>
            Включение в работу нужных экспертов
          </span>
        </li>
        <li class="expertise-list__element animated-underline">
          <span>
            прохождение экспертизы проекта, выполненого сторонней проектной организацией
          </span>
        </li>
      </ol>
    </section>
  </div>

  <RequestFormComponent />
</template>

<style scoped>
.research {
  display: grid;
  grid-template-areas: "title" "subtitle" "list-wrapper";
  position: relative;
  padding-bottom: 0;
}
.research::after {
  content: "";
  position: absolute;
  right: var(--horizontal-padding);
  left: var(--horizontal-padding);
  bottom: 0;
  height: 1px;
  background-color: currentColor;
}
@media (min-width: 768px) {
  .research {
    grid-template-areas: "title ." "subtitle list-wrapper";
  }
}
.research__title {
  grid-area: title;
  width: -moz-min-content;
  width: min-content;
}
.research__subtitle {
  grid-area: subtitle;
  margin: 0 0 60px 0;
  max-width: 35ch;
}
@media (min-width: 1024px) {
  .research__subtitle {
    max-width: 36ch;
  }
}
.research-list-wrapper {
  grid-area: list-wrapper;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 8px;
  padding-bottom: 20px;
  margin-left: 18px;
  border-left: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
}
.research-list-wrapper::after {
  content: "";
  position: absolute;
  left: -18px;
  bottom: -1px;
  width: 18px;
  height: 1px;
  background-color: currentColor;
}
.research-list-title {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text2-line-height);
  letter-spacing: var(--font-text2-letter-spacing);
  margin: 0 0 60px 0;
  max-width: 42ch;
}
@media (min-width: 1920px) {
  .research-list-title {
    max-width: 52ch;
  }
}
.research-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
}
@media (min-width: 768px) {
  .research-list {
    gap: 12px;
    margin-bottom: 100px;
  }
}
@media (min-width: 1024px) {
  .research-list {
    margin-bottom: 140px;
  }
}
@media (min-width: 1920px) {
  .research-list {
    gap: 15px;
    margin-bottom: 180px;
  }
}
.research-list__element span {
  margin: 0;
  text-transform: uppercase;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-h5-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h5-line-height);
  letter-spacing: var(--font-h5-letter-spacing);
}

.surveys {
  display: grid;
  gap: 40px;
}
@media (min-width: 1440px) {
  .surveys {
    gap: 60px;
  }
}
@media (min-width: 1920px) {
  .surveys {
    gap: 80px;
  }
}
.surveys__title {
  width: -moz-min-content;
  width: min-content;
  margin: 0;
}
@media (min-width: 768px) {
  .surveys__title {
    width: auto;
  }
}
.surveys-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}
@media (min-width: 1024px) {
  .surveys-list {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-auto-flow: column;
    gap: 60px 40px;
  }
}
@media (min-width: 1440px) {
  .surveys-list {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: row;
  }
}
@media (min-width: 1920px) {
  .surveys-list {
    gap: 100px 58px;
  }
}
.surveys-list__element {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "icon" "name" "description";
  gap: 4px;
}
@media (min-width: 768px) {
  .surveys-list__element {
    gap: 8px 16px;
    align-items: center;
    grid-template-columns: auto 1fr;
    grid-template-areas: "icon name" "icon description";
  }
}
@media (min-width: 1440px) {
  .surveys-list__element {
    gap: 6px 20px;
  }
}
@media (min-width: 1920px) {
  .surveys-list__element {
    gap: 12px 24px;
  }
}
.surveys-list__element::before {
  --survey-icon-size: 40px;
  content: "";
  display: block;
  grid-area: icon;
  min-width: var(--survey-icon-size);
  width: var(--survey-icon-size);
  min-height: var(--survey-icon-size);
  height: var(--survey-icon-size);
  margin-bottom: 4px;
  background-color: currentColor;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
@media (min-width: 768px) {
  .surveys-list__element::before {
    margin-bottom: 0;
  }
}
@media (min-width: 1440px) {
  .surveys-list__element::before {
    --survey-icon-size: 52px;
  }
}
@media (min-width: 1920px) {
  .surveys-list__element::before {
    --survey-icon-size: 60px;
  }
}
.surveys-list__element:nth-child(5n+1)::before {
  background-image: url("../assets/icons/engineering/survey-icon-first.svg");
}
.surveys-list__element:nth-child(5n+2)::before {
  background-image: url("../assets/icons/engineering/survey-icon-second.svg");
}
.surveys-list__element:nth-child(5n+3)::before {
  background-image: url("../assets/icons/engineering/survey-icon-third.svg");
}
.surveys-list__element:nth-child(5n+4)::before {
  background-image: url("../assets/icons/engineering/survey-icon-fourth.svg");
}
.surveys-list__element:nth-child(5n+5)::before {
  background-image: url("../assets/icons/engineering/survey-icon-fifth.svg");
}
@media (min-width: 1440px) {
  .surveys-list__element:nth-child(4) {
    grid-column: 2;
  }
}

.survey__name {
  margin: 0;
  text-transform: uppercase;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-h5-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h5-line-height);
  letter-spacing: var(--font-h5-letter-spacing);
  grid-area: name;
}
.survey__description {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text1-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text1-line-height);
  letter-spacing: var(--font-text1-letter-spacing);
  margin: 0;
  grid-area: description;
}

.sketch-design {
  display: grid;
  grid-template-areas: "title" "subtitle" "list";
  padding-bottom: 0;
}
@media (min-width: 768px) {
  .sketch-design {
    grid-template-areas: "title list" "subtitle list";
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid currentColor;
  }
}
.sketch-design__title {
  width: -moz-min-content;
  width: min-content;
  grid-area: title;
  margin: 0 0 8px;
}
.sketch-design__subtitle {
  grid-area: subtitle;
  margin: 0 0 20px;
  max-width: 44ch;
}
.sketch-design-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-area: list;
  position: relative;
  margin-left: 18px;
  border-bottom: 1px solid currentColor;
}
.sketch-design-list::after {
  content: "";
  position: absolute;
  left: -18px;
  bottom: -1px;
  width: 18px;
  height: 1px;
  background-color: currentColor;
}
@media (min-width: 768px) {
  .sketch-design-list {
    border: none;
    margin-left: 0;
  }
  .sketch-design-list::after {
    display: none;
  }
}
.sketch-design-list-element {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px 30px 8px;
  border-left: 1px solid var(--dark-blue);
}
@media (min-width: 1440px) {
  .sketch-design-list-element {
    padding-left: 10px;
  }
}
@media (min-width: 1920px) {
  .sketch-design-list-element {
    padding-left: 12px;
  }
}
.sketch-design-list-element:first-of-type {
  padding-top: 20px;
}
@media (min-width: 768px) {
  .sketch-design-list-element:first-of-type {
    padding-top: 0;
  }
}
.sketch-design-list-element:last-of-type {
  padding-bottom: 80px;
}
@media (min-width: 768px) {
  .sketch-design-list-element:last-of-type {
    padding-top: 30px;
    padding-right: 0;
    padding-bottom: 100px;
  }
}
@media (min-width: 1440px) {
  .sketch-design-list-element:last-of-type {
    padding-top: 50px;
  }
}
@media (min-width: 1920px) {
  .sketch-design-list-element:last-of-type {
    padding-top: 70px;
    padding-bottom: 180px;
  }
}
.sketch-design-list-element__title {
  margin: 0;
  text-transform: uppercase;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-h5-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h5-line-height);
  letter-spacing: var(--font-h5-letter-spacing);
}
.sketch-design-list-element__text {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text1-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text1-line-height);
  letter-spacing: var(--font-text1-letter-spacing);
  margin: 0;
  max-width: 38ch;
}

.result-text {
  display: flex;
  flex-direction: row;
  gap: 4px;
  max-width: 38ch;
  margin: 0;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text2-line-height);
  letter-spacing: var(--font-text2-letter-spacing);
  color: var(--dark-blue-50);
}
@media (min-width: 768px) {
  .result-text {
    gap: 8px;
    max-width: 100%;
  }
}
@media (min-width: 1024px) {
  .result-text {
    max-width: 56ch;
  }
}
@media (min-width: 1440px) {
  .result-text {
    max-width: 54ch;
  }
}
@media (min-width: 1920px) {
  .result-text {
    gap: 12px;
  }
}
.result-text::before {
  --arrow-down-icon-size: 20px;
  content: "";
  margin-top: 5px;
  min-width: var(--arrow-down-icon-size);
  width: var(--arrow-down-icon-size);
  min-height: var(--arrow-down-icon-size);
  height: var(--arrow-down-icon-size);
  background-image: url("../assets/icons/arrow-down.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
@media (min-width: 768px) {
  .result-text::before {
    --arrow-down-icon-size: 28px;
  }
}
@media (min-width: 1440px) {
  .result-text::before {
    --arrow-down-icon-size: 36px;
  }
}
@media (min-width: 1920px) {
  .result-text::before {
    --arrow-down-icon-size: 40px;
  }
}

.project-documentation {
  display: grid;
  grid-template-areas: "title" "subtitle" "decorative" "result";
  grid-template-rows: auto auto auto auto;
}
@media (min-width: 768px) {
  .project-documentation {
    gap: 0 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "title title" "subtitle ." ". decorative" ". result";
  }
}
@media (min-width: 1024px) {
  .project-documentation {
    gap: 0 20px;
  }
}
.project-documentation__title {
  grid-area: title;
}
.project-documentation__subtitle {
  grid-area: subtitle;
  margin: 0 0 40px;
  max-width: 42ch;
}
@media (min-width: 768px) {
  .project-documentation__subtitle {
    margin-bottom: 60px;
  }
}
@media (min-width: 1440px) {
  .project-documentation__subtitle {
    max-width: 40ch;
    margin-bottom: 80px;
  }
}
@media (min-width: 1920px) {
  .project-documentation__subtitle {
    max-width: 41ch;
    margin-bottom: 100px;
  }
}
.project-documentation-decorative {
  grid-area: decorative;
  margin-bottom: 40px;
}
.project-documentation-decorative__text {
  margin: 0;
  text-transform: uppercase;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-h5-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h5-line-height);
  letter-spacing: var(--font-h5-letter-spacing);
  margin-bottom: 8px;
  max-width: 20ch;
}
@media (min-width: 1024px) {
  .project-documentation-decorative__text {
    max-width: none;
  }
}
.project-documentation-decorative__stripes-block {
  width: 100%;
  height: 80px;
  border: 1px solid var(--dark-blue);
  background: repeating-linear-gradient(45deg, transparent, transparent 20px, var(--dark-blue) 21px, var(--dark-blue) 22px);
}
@media (min-width: 1024px) {
  .project-documentation-decorative__stripes-block {
    height: 100px;
  }
}
@media (min-width: 1440px) {
  .project-documentation-decorative__stripes-block {
    height: 105px;
  }
}
@media (min-width: 1920px) {
  .project-documentation-decorative__stripes-block {
    height: 140px;
  }
}
@media (min-width: 1024px) {
  .project-documentation-decorative {
    margin-bottom: 80px;
  }
}
@media (min-width: 1920px) {
  .project-documentation-decorative {
    margin-bottom: 100px;
  }
}
.project-documentation .result-text {
  grid-area: result;
}

.expertise__title {
  margin: 0;
}
.expertise__subtitle {
  margin: 0 0 40px;
  max-width: 48ch;
}
@media (min-width: 768px) {
  .expertise__subtitle {
    margin: 0 0 60px;
  }
}
@media (min-width: 1440px) {
  .expertise__subtitle {
    margin: 0 0 80px;
  }
}
@media (min-width: 1920px) {
  .expertise__subtitle {
    margin: 0 0 100px;
  }
}
.expertise-list {
  display: flex;
  flex-direction: column;
  list-style: none;
}
.expertise-list__element {
  position: relative;
  margin: 0;
  text-transform: uppercase;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-h5-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h5-line-height);
  letter-spacing: var(--font-h5-letter-spacing);
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px 0;
}

.expertise-list__element.animated-underline::after {
  content: '';
  position: absolute;
  width: 0;
  bottom: 0;
  height: 1px;
  background-color: var(--dark-blue);
  transition: width 1750ms ease-in;
}
.animated-underline:nth-child(2) {
  transition-delay: 250ms;
}
.animated-underline:nth-child(3) {
  transition-delay: 500ms;
}
.expertise-list__element.animated-underline.visible::after {
  width: 100%;
}
.expertise-list__element::before {
  --ol-marker-size: 36px;

  content: "";
  display: block;
  margin-top: 4px;
  min-width: var(--ol-marker-size);
  width: var(--ol-marker-size);
  min-height: var(--ol-marker-size);
  height: var(--ol-marker-size);
  background: center/contain no-repeat;
}
@media (min-width: 768px) {
  .expertise-list__element::before {
    --ol-marker-size: 40px;
    margin: 0;
  }
}
@media (min-width: 1440px) {
  .expertise-list__element::before {
    --ol-marker-size: 48px;
  }
}
@media (min-width: 1920px) {
  .expertise-list__element::before {
    --ol-marker-size: 64px;
  }
}
.expertise-list__element:nth-child(1)::before {
  background-image: url("../assets/icons/numbers/number-one.svg");
}
.expertise-list__element:nth-child(2)::before {
  background-image: url("../assets/icons/numbers/number-two.svg");
}
.expertise-list__element:nth-child(3)::before {
  background-image: url("../assets/icons/numbers/number-three.svg");
}
.expertise-list__element:nth-child(1) {
  padding-top: 0;
}
@media (min-width: 768px) {
  .expertise-list__element {
    padding: 14px 0 20px 0;
    align-items: center;
  }
}
@media (min-width: 1440px) {
  .expertise-list__element {
    padding: 16px 0 30px 0;
    gap: 0 20px;
  }
}
@media (min-width: 1920px) {
  .expertise-list__element {
    padding: 24px 0;
    gap: 0 24px;
  }
}

.work-documentation__title {
  margin: 0;
}
.work-documentation__subtitle {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text2-line-height);
  letter-spacing: var(--font-text2-letter-spacing);
  margin: 0 0 40px 0;
  max-width: 50ch;
}
@media (min-width: 768px) {
  .work-documentation__subtitle {
    margin: 0 0 60px;
  }
}
@media (min-width: 1440px) {
  .work-documentation__subtitle {
    font-family: var(--font-nevermind-compact);
    font-size: var(--font-text1-size);
    font-weight: var(--regular-font-weight);
    line-height: var(--font-text1-line-height);
    letter-spacing: var(--font-text1-letter-spacing);
    margin: 0 0 80px;
  }
}
@media (min-width: 1920px) {
  .work-documentation__subtitle {
    margin: 0 0 100px;
  }
}
.work-documentation-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
@media (min-width: 768px) {
  .work-documentation-list {
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
  }
}
.work-documentation-list__element {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  min-height: 160px;
  border: 1px solid currentColor;
  opacity: 0;
  animation-fill-mode: both;
  animation-duration: 750ms;
}
.work-documentation-list__element.visible {
  animation-name: slideFromRight;
}
.work-documentation-list__element:nth-child(5n+1) {
  /*animation-name: slideFromLeft;*/
  animation-delay: 0.1s;
}
.work-documentation-list__element:nth-child(5n+2) {
  /*animation-name: slideFromTop;*/
  animation-delay: 0.2s;
}
.work-documentation-list__element:nth-child(5n+3) {
  /*animation-name: slideFromRight;*/
  animation-delay: 0.3s;
}
.work-documentation-list__element:nth-child(5n+4) {
  /*animation-name: slideFromBottom;*/
  animation-delay: 0.4s;
}
.work-documentation-list__element:nth-child(5n+5) {
  /*animation-name: slideFromBottom;*/
  animation-delay: 0.5s;
}
@media (min-width: 768px) {
  .work-documentation-list__element:nth-child(5n+1) {
    grid-column: 1/3;
  }
  .work-documentation-list__element:nth-child(5n+2) {
    grid-column: 3/5;
  }
  .work-documentation-list__element:nth-child(5n+3) {
    grid-column: 5/-1;
  }
  .work-documentation-list__element:nth-child(5n+4) {
    grid-column: 1/4;
    min-height: 220px;
  }
  .work-documentation-list__element:nth-child(5n+5) {
    grid-column: 4/-1;
    min-height: 220px;
  }
}
@media (min-width: 1440px) {
  .work-documentation-list__element {
    padding: 20px;
  }
  .work-documentation-list__element:nth-child(5n+1), .work-documentation-list__element:nth-child(5n+2), .work-documentation-list__element:nth-child(5n+3) {
    min-height: 188px;
  }
  .work-documentation-list__element:nth-child(5n+4), .work-documentation-list__element:nth-child(5n+5) {
    min-height: 260px;
  }
}
@media (min-width: 1920px) {
  .work-documentation-list__element {
    padding: 28px;
  }
  .work-documentation-list__element:nth-child(5n+1), .work-documentation-list__element:nth-child(5n+2), .work-documentation-list__element:nth-child(5n+3) {
    min-height: 250px;
  }
  .work-documentation-list__element:nth-child(5n+4), .work-documentation-list__element:nth-child(5n+5) {
    min-height: 350px;
  }
}
.work-documentation-list__element:last-of-type {
  position: relative;
}
.work-documentation-list__element:last-of-type::after {
  content: "";
  position: absolute;
  bottom: -1px;
  right: -1px;
  border-width: 0 36px 36px 0;
  transform: rotate(90deg);
  border-style: solid;
  border-color: transparent var(--orange);
  box-shadow: -1px 1px white;
}
.work-documentation-list__element:last-of-type::before {
  content: "";
  position: absolute;
  right: -8px;
  bottom: 17px;
  background-color: var(--white);
  height: 1px;
  transform: rotate(315deg);
  width: 50px;
  z-index: 1;
}

.solution-title {
  margin: 0;
  text-transform: uppercase;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-h5-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h5-line-height);
  letter-spacing: var(--font-h5-letter-spacing);
}
.solution-text {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text1-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text1-line-height);
  letter-spacing: var(--font-text1-letter-spacing);
  text-transform: lowercase;
}
</style>
