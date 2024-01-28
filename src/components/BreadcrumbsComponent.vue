<script setup>
defineProps(['pageTitle']);
</script>

<template>
  <ul class="breadcrumbs-list container">
    <li class="breadcrumbs-list__breadcrumb font-breadcrumb">
      <a href="/" class="link">Главная</a>
    </li>
    <li class="breadcrumbs-list__breadcrumb font-breadcrumb">
      <a href="" class="link">{{ pageTitle }}</a>
    </li>
  </ul>
</template>

<style scoped>
.breadcrumbs-list {
  display: flex;
  flex-direction: row;
  gap: 4px;
  height: fit-content;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: var(--white);
}

@media (min-width: 1024px) {
  .breadcrumbs-list {
    padding-top: 42px;
  }
}

@media (min-width: 1440px) {
  .breadcrumbs-list {
    padding-top: 45px;
  }
}

@media (min-width: 1920px) {
  .breadcrumbs-list {
    padding-top: 60px;
    gap: 8px;
  }
}

.breadcrumbs-list__breadcrumb {
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  color: var(--dark-blue-50);
}

@media (min-width: 768px) {
  .breadcrumbs-list__breadcrumb {
    align-items: center;
  }
}

.breadcrumbs-list__breadcrumb:not(:last-of-type)::after {
  --breadcrumb-arrow-size: 12px;
  content: "";
  display: inline-block;
  min-width: var(--breadcrumb-arrow-size);
  min-height: var(--breadcrumb-arrow-size);
  background: url("../assets/icons/breadcrumb-arrow.svg") center / contain no-repeat;
  margin-left: 4px;
}

@media (min-width: 1920px) {
  .breadcrumbs-list__breadcrumb:not(:last-of-type)::after {
    margin-left: 8px;
    --breadcrumb-arrow-size: 16px;
  }
}

.breadcrumbs-list__breadcrumb:last-of-type {
  color: var(--dark-blue);
  pointer-events: none;
}

.breadcrumbs-list__breadcrumb .link {
  color: inherit;
  text-decoration: none;
}
</style>
