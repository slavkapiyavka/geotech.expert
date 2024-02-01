<script setup lang="js">
import RequestFormComponent from "@/components/RequestFormComponent.vue";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent.vue";
import {onMounted, ref} from "vue";
import { useVisibilityEffect } from "@/composables/useVisibilityEffect.js";

const pageTitle = ref('Сотрудничество');

useVisibilityEffect('.introduction-list');
useVisibilityEffect('[data-splitting]');

onMounted(() => {
  document.title = `${pageTitle.value} | Геотехзащита`;
})
</script>

<template>
  <BreadcrumbsComponent :page-title="pageTitle" />

  <div class="hero-container background-color-white">
    <section class="hero container">
      <h1 class="hero__title">Сотрудничество</h1>
      <p class="hero__subtitle container__subtitle hero__subtitle_cooperation">
        Работаем с заказчиками, подрядчиками, проектировщиками
      </p>

      <div class="background-shape"></div>
    </section>
  </div>

  <div class="introduction-wrapper" v-adjust-top>
    <section class="introduction cooperation container">
      <h2 class="introduction__title" data-splitting>Отрасли объектов проектирования</h2>

      <ul class="introduction-list">
        <li class="introduction-list__element">
          <span>Природоохранные сооружения</span>
        </li>
        <li class="introduction-list__element">
          <span>Горнодобывающая промышленность</span>
        </li>
        <li class="introduction-list__element">
          <span>Сельское хозяйство</span>
        </li>
        <li class="introduction-list__element">
          <span>Энергетический комплекс</span>
        </li>
        <li class="introduction-list__element">
          <span>Транспортное строительство</span>
        </li>
        <li class="introduction-list__element">
          <span>Нефтегазовый комплекс</span>
        </li>
        <li class="introduction-list__element">
          <span>Строительство аэродромов</span>
        </li>
        <li class="introduction-list__element">
          <span>Очистные сооружения</span>
        </li>
        <li class="introduction-list__element">
          <span>Гидротехническое строительство</span>
        </li>
        <li class="introduction-list__element">
          <span>Строительство шахт и тоннелей</span>
        </li>
      </ul>
    </section>
  </div>

  <div class="cooperation-wrapper">
    <section class="cooperation container">
      <h2 class="cooperation__title container__title">Мы сотрудничаем</h2>

      <ul class="cooperation-list">
        <li class="cooperation-list-element">
          <p class="cooperation-list__title">
            государственные и коммерческие организации
          </p>
          <span class="cooperation-list__description">
            Выполняем полный комплекс изысканий, предпроектных и проектных работ с прохождением экспертизы
          </span>
        </li>

        <li class="cooperation-list-element">
          <p class="cooperation-list__title">
            проектные организации
          </p>
          <span class="cooperation-list__description">
            Разрабатываем отдельные разделы проектной документации на экологические, гидротехнические, геотехнические и промышленные сооружения
          </span>
        </li>

        <li class="cooperation-list-element">
          <p class="cooperation-list__title">
            Самозанятые Специалисты
          </p>
          <span class="cooperation-list__description">
            Приветствуем к сотрудничеству и совместной работе самозанятых специалистов в области проектирования
          </span>
        </li>
      </ul>
    </section>
  </div>

  <div class="collection-wrapper background-color-white">
    <section class="collection container">
      <h2 class="collection__title container__title">Первый шаг</h2>
      <p class="collection__subtitle container__subtitle">Сбор исходных данных</p>

      <details class="collection-details">
        <summary class="collection-details__summary">
          Техническое задание
        </summary>
        <ul class="collection-list">
          <li class="collection-list__element">наименование и адрес проектируемого объекта</li>
          <li class="collection-list__element">основание для проектирования (решение местной администрации, приказ министерства или ведомства)</li>
          <li class="collection-list__element">подробные данные об особых условиях площадки и района реконструкции</li>
          <li class="collection-list__element">назначение и типы, расчетная мощность, вместимость или пропускная способность, состав и площади, рабочие площади в производимом строительстве или реконструкции</li>
          <li class="collection-list__element">основные требования к архитектурно-планировочному</li>
          <li class="collection-list__element">указания по проведению реконструкции или строительства очередями</li>
          <li class="collection-list__element">стадийность проектирования</li>
          <li class="collection-list__element">наименование и адрес проектной организации генерального проектировщика</li>
          <li class="collection-list__element">наименование и адрес ремонтно-строительной организации - генерального подрядчика, а также сведения о предприятиях, на которых могут быть изготовлены строительные конструкции и изделия</li>
          <li class="collection-list__element">ориентировочные сроки окончания работ по реконструкции</li>
          <li class="collection-list__element">основные требования по благоустройству территории реконструируемого участка застройки</li>
          <li class="collection-list__element">мероприятия по обеспечению жизнедеятельности в условиях чрезвычайных ситуаций</li>
        </ul>
      </details>

      <details class="collection-details">
        <summary class="collection-details__summary">
          Документы
        </summary>
        <ul class="collection-list">
          <li class="collection-list__element">разрешительный акт на выполнение работ</li>
          <li class="collection-list__element">архитектурно-планировочное задание, утвержденное городской администрацией</li>
          <li class="collection-list__element">задание от инспекции по охране памятников архитектуры</li>
          <li class="collection-list__element">разрешение на присоединение реконструируемого или строящегося объекта к источникам снабжения, инженерным сетям и коммуникациям</li>
          <li class="collection-list__element">материалы по проведенным ранее техническим обследованиям участка и конструкций</li>
          <li class="collection-list__element">разрешение на закрытие движения и отвод транспорта от площадки реконструкции, вскрытие дорожного покрытия</li>
          <li class="collection-list__element">оценочные акты и решения городской администрации о сносе зданий и сооружений, не находящихся на балансе заказчика проекта, и характере компенсации за них</li>
          <li class="collection-list__element">технический паспорт строения с указанием степени физического износа конструкций и инженерного оборудования, объемов и сроков ранее проведенных капитальных ремонтов и реконструкции</li>
          <li class="collection-list__element">справку о состоянии газовых сетей и оборудования</li>
          <li class="collection-list__element">справки эксплуатирующих организаций о состоянии лифтов, объединенных диспетчерских систем, центральных тепловых сетей</li>
          <li class="collection-list__element">решение городской администрации о назначении функции встроенных нежилых помещений</li>
        </ul>
      </details>
    </section>
  </div>

  <RequestFormComponent />
</template>

<style scoped>
.hero {
  grid-template-areas: 'title' 'subtitle';
}

.cooperation {
  gap: 40px;
}
@media (min-width: 1440px) {
  .cooperation {
    gap: 60px;
  }
}
@media (min-width: 1920px) {
  .cooperation {
    gap: 80px;
  }
}
.cooperation-wrapper {
  background-color: var(--beige);
}
.cooperation__title {
  margin-bottom: 0;
}
.cooperation-list {
  display: grid;
  grid-auto-flow: row;
  gap: 60px;
}
@media (min-width: 768px) {
  .cooperation-list {
    grid-template-columns: 1fr 1fr;
    gap: 40px 60px;
  }
}
@media (min-width: 1024px) {
  .cooperation-list {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
}
.cooperation-list-element {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}
.cooperation-list-element::before {
  --decorative-icon-size: 40px;

  content: "";
  display: block;
  margin-bottom: 8px;
  width: var(--decorative-icon-size);
  min-width: var(--decorative-icon-size);
  height: var(--decorative-icon-size);
  min-height: var(--decorative-icon-size);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
@media (min-width: 768px) {
  .cooperation-list-element::before {
    --decorative-icon-size: 56px;
  }
}
@media (min-width: 1440px) {
  .cooperation-list-element::before {
    --decorative-icon-size: 60px;
    margin-bottom: 5px;
  }
}
@media (min-width: 1920px) {
  .cooperation-list-element::before {
    --decorative-icon-size: 78px;
    margin-bottom: 8px;
  }
}
.cooperation-list-element:nth-child(3n+1)::before {
  background-image: url("../assets/icons/cooperation/decorative-frame-first.svg");
}
.cooperation-list-element:nth-child(3n+2)::before {
  background-image: url("../assets/icons/cooperation/decorative-frame-second.svg");
}
.cooperation-list-element:nth-child(3n+3)::before {
  background-image: url("../assets/icons/cooperation/decorative-frame-third.svg");
}
@media (min-width: 768px) {
  .cooperation-list-element {
    gap: 12px;
  }
  .cooperation-list-element:nth-child(3n+3) {
    grid-column: 2/-1;
  }
}
@media (min-width: 1024px) {
  .cooperation-list-element:nth-child(3n+3) {
    grid-column: auto;
  }
}
@media (min-width: 1440px) {
  .cooperation-list-element {
    gap: 15px;
  }
  .cooperation-list-element:nth-child(3n+3) {
    grid-column: auto;
  }
}
@media (min-width: 1440px) {
  .cooperation-list-element {
    gap: 20px;
  }
}
.cooperation-list-element:first-child .cooperation-list__title {
  max-width: 32ch;
}
.cooperation-list__title {
  margin: 0;
  text-transform: uppercase;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-h5-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h5-line-height);
  letter-spacing: var(--font-h5-letter-spacing);
  max-width: -moz-min-content;
  max-width: min-content;
}
.cooperation-list__description {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text2-line-height);
  letter-spacing: var(--font-text2-letter-spacing);
  max-width: 44ch;
}
@media (min-width: 1024px) {
  .cooperation-list__description {
    max-width: 46ch;
  }
}
@media (min-width: 1440px) {
  .cooperation-list__description {
    max-width: 43ch;
  }
}

.collection__subtitle {
  margin: 0 0 40px 0;
}
@media (min-width: 1440px) {
  .collection__subtitle {
    margin: 0 0 60px 0;
  }
}
@media (min-width: 1920px) {
  .collection__subtitle {
    margin: 0 0 80px 0;
  }
}
.collection-details {
  margin-bottom: 28px;
  border-bottom: 1px solid var(--dark-blue);
}
@media (min-width: 1440px) {
  .collection-details {
    margin-bottom: 36px;
  }
}
@media (min-width: 1920px) {
  .collection-details {
    margin-bottom: 48px;
  }
}
.collection-details:last-of-type {
  margin-bottom: 0;
}
.collection-details__summary {
  text-transform: uppercase;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-h5-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h5-line-height);
  letter-spacing: var(--font-h5-letter-spacing);
  margin: 0 0 28px;
}
@media (min-width: 1440px) {
  .collection-details__summary {
    margin-bottom: 36px;
  }
}
@media (min-width: 1920px) {
  .collection-details__summary {
    margin-bottom: 48px;
  }
}
.collection-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 28px;
}
@media (min-width: 1440px) {
  .collection-list {
    margin-bottom: 36px;
  }
}
@media (min-width: 1920px) {
  .collection-list {
    margin-bottom: 48px;
  }
}
.collection-list__element {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text2-line-height);
  letter-spacing: var(--font-text2-letter-spacing);
  color: var(--dark-blue-75);
}
.collection-list__element::before {
  content: "—";
  margin-right: 2px;
}
</style>
