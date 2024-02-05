<script setup lang="js">
import RequestFormComponent from "@/components/RequestFormComponent.vue";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent.vue";
import { onMounted, ref } from "vue";
import {useVisibilityEffect} from "@/composables/useVisibilityEffect.js";

const pageTitle = ref('Проекты');

useVisibilityEffect('.reveal');

onMounted(() => {
  document.title = `${pageTitle.value} | Геотехзащита`;
})
</script>

<template :key="pageTitle">
  <BreadcrumbsComponent class="reveal reveal_left" :page-title="pageTitle" />

  <div class="hero-container background-color-white">
    <section class="hero container">
      <h1 class="hero__title reveal reveal_left">Проекты</h1>
      <nav class="tabs-nav reveal reveal_left">
        <button class="tab tab_active">2023</button>
        <button class="tab">2022</button>
        <button class="tab">2021</button>
        <button class="tab">2020</button>
      </nav>

      <div class="background-shape projects"></div>
    </section>
  </div>

  <div class="table-wrapper container background-color-white">
    <table>
      <thead>
      <tr>
        <th>ОБЪЕКТ</th>
        <th>АДРЕС</th>
        <th>КОМПАНИЯ</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Территория, состоящая из элементных участков, нарушенных при складировании и захоронении твердых коммунальных и прочих отходов</td>
        <td>Саратовская область, г. Энгельс, промзона, в районе ФГУП «Кристалл»</td>
        <td>ООО СаратовГражданПроект</td>
      </tr>
      <tr>
        <td>Реконструкция Кирсановского сахарного завода ООО «Кристалл» с созданием дополнительных мощностей производительностью не менее 20 000 тонн свеклы в сутки</td>
        <td>Тамбовская область, г. Кирсанов</td>
        <td>ООО Новация</td>
      </tr>
      <tr>
        <td>Рекультивация свалки за домами №122 и №126</td>
        <td>Ивановская область, г. Иваново, ул. Минская</td>
        <td>ООО Экоклеар</td>
      </tr>
      <tr>
        <td>Комплекс по обработке и размещению твердых коммунальных отходов на территории</td>
        <td>Московская область, Можайский округ</td>
        <td>ООО ИПЭГ</td>
      </tr>
      <tr>
        <td>Шламовая карта №3</td>
        <td>Красноярский край, г. Ачинск, Южная Промзона, квартал XII, строение 1</td>
        <td>АО «РУСАЛ Ачинск»</td>
      </tr>
      <tr>
        <td>Ликвидация несанкционированной свалки</td>
        <td>г. Белинский</td>
        <td>АО ВНИИГТ</td>
      </tr>
      <tr>
        <td>Рекультивация (ликвидация) несанкционированной свалки в границах муниципального образования</td>
        <td>Оренбургская область, г. Медногорск</td>
        <td>АО ВНИИГТ</td>
      </tr>
      </tbody>
    </table>
  </div>

  <RequestFormComponent />
</template>

<style scoped>

</style>
