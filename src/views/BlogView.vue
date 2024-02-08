<script setup lang="js">
import RequestFormComponent from "@/components/RequestFormComponent.vue";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent.vue";
import {onMounted, ref} from "vue";
import {useVisibilityEffect} from "@/composables/useVisibilityEffect.js";

const pageTitle = ref('Блог');

useVisibilityEffect('.reveal');

onMounted(() => {
  document.title = `${pageTitle.value} | Геотехзащита`;
})
</script>

<template :key="pageTitle">
  <BreadcrumbsComponent class="reveal reveal_left" :page-title="pageTitle" />

  <div class="hero-container background-color-white">
    <section class="hero container">
      <h1 class="hero__title reveal reveal_left">Блог</h1>
      <div class="background-shape blog-page"></div>
    </section>
  </div>

  <div class="articles-grid-wrapper background-color-white">
    <section class="articles-grid container" id="articlesGrid">
      <article class="article">
        <img src="" alt="Обложка статьи" class="article__image" loading="lazy">
        <time class="article__tag tag" datetime="2023-06-25">25.06.23</time>
        <h6 class="article__title short-text-three">
          Подземные переходы трубопроводов с применением раструбных труб
        </h6>
        <p class="article__excerpt short-text-two">
          При устройстве переходов методом труба в трубе с применением раструбных бетонных или чугунных труб имеется ряд особенностей. Раструбное соединение труб не позволяет осуществлять протаскивание вытягиванием рабочей плети, а уширение диаметра в местах раструба является препятствием при укладке рабочей плети в футляре (дюкере).
        </p>
      </article>
      <article class="article">
        <img src="" alt="Обложка статьи" class="article__image" loading="lazy">
        <time class="article__tag tag" datetime="2023-06-25">25.06.23</time>
        <h6 class="article__title short-text-three">Проектирование систем водоотведения в сложных климатических условиях</h6>
        <p class="article__excerpt short-text-two">Создание эффективных систем водоотведения в регионах с экстремальными погодными условиями требует применения специальных технологических решений. Необходимо учитывать возможность температурных колебаний, которые могут привести к деформации трубопроводов, а также использовать материалы, устойчивые к коррозии и образованию ледяных заторов.</p>
      </article>
      <article class="article">
        <img src="" alt="Обложка статьи" class="article__image" loading="lazy">
        <time class="article__tag tag" datetime="2023-06-25">25.06.23</time>
        <h6 class="article__title short-text-three">Монтаж наружных трубопроводов с использованием антивибрационных креплений</h6>
        <p class="article__excerpt short-text-two">Для предотвращения повреждения наружных трубопроводов из-за вибраций и температурных расширений, применяются антивибрационные крепления. Эти элементы позволяют трубам "играть", компенсируя вибрации от проходящего транспорта и температурные изменения, тем самым снижая риск трещин и разрывов в системе.</p>
      </article>
      <article class="article">
        <img src="" alt="Обложка статьи" class="article__image" loading="lazy">
        <time class="article__tag tag" datetime="2023-06-25">25.06.23</time>
        <h6 class="article__title short-text-three">Инновационные методы защиты труб от коррозии</h6>
        <p class="article__excerpt short-text-two">Защита металлических труб от коррозии является ключевой задачей для продления срока их службы, особенно в условиях агрессивной среды. Применение новейших покрытий на основе полимерных материалов и антикоррозийных составов позволяет значительно увеличить устойчивость трубопроводов к химическому воздействию и окислению.</p>
      </article>
      <article class="article">
        <img src="" alt="Обложка статьи" class="article__image" loading="lazy">
        <time class="article__tag tag" datetime="2023-06-25">25.06.23</time>
        <h6 class="article__title short-text-three">Адаптация городских канализационных систем к повышенным нагрузкам</h6>
        <p class="article__excerpt short-text-two">В связи с увеличением населения городов и объёмов производственных отходов возникает необходимость адаптации канализационных систем к повышенным нагрузкам. Это включает в себя укрепление трубопроводов, увеличение пропускной способности и внедрение дополнительных ступеней очистки сточных вод.</p>
      </article>

      <button type="button" class="primary-button primary-button_centered" id="loadMoreArticles">Загрузить ещё</button>
    </section>
  </div>

  <RequestFormComponent />

  <template id="detailedArticle">
    <article class="article-detailed-wrapper background-color-white">
      <div class="article-detailed container">
        <button type="button" class="close-button" id="closeButton"></button>

        <time class="tag" datetime="2023-06-25">25.06.23</time>
        <h2 class="article-detailed__title">
          Подземные переходы трубопроводов с применением раструбных труб
        </h2>
        <div class="share-buttons">
          <button type="button" class="share-button share-button_telegram">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.22316 10.1626C7.80894 7.70527 15.0374 4.70927 16.0352 4.29461C18.6525 3.20927 19.4556 3.41727 19.0552 5.82083C18.7676 7.54838 17.9378 13.2679 17.2765 16.8279C16.884 18.9391 16.0036 19.1893 14.6192 18.2759C13.9534 17.8364 10.5929 15.6142 9.8636 15.0924C9.19782 14.6168 8.2796 14.0448 9.43116 12.9182C9.84093 12.5168 12.5272 9.95194 14.62 7.95549C14.8943 7.69327 14.5498 7.26261 14.2334 7.47283C11.4125 9.34349 7.50138 11.9399 7.0036 12.2782C6.2516 12.7888 5.52938 13.0231 4.23294 12.6506C3.25338 12.3693 2.29649 12.0337 1.92405 11.9057C0.489825 11.4133 0.830269 10.7755 2.22316 10.1626Z" fill="#17425A"/>
            </svg>
            <span class="visually-hidden">Поделиться в Telegram</span>
          </button>
          <button type="button" class="share-button share-button_vk">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_652_1999)">
                <path d="M19.7824 16.4274C18.9838 14.9901 16.9264 13.263 16.0771 12.5114C15.8446 12.3057 15.8198 11.9497 16.0313 11.7221C17.6522 9.98033 18.9486 7.97899 19.3949 6.76966C19.5918 6.23544 19.1842 5.67099 18.61 5.67099H16.942C16.3922 5.67099 16.0704 5.86833 15.9171 6.18255C14.57 8.94299 13.4144 10.1377 12.6055 10.8359C12.1526 11.227 11.4464 10.903 11.4464 10.3079C11.4464 9.16121 11.4464 7.67899 11.4464 6.62788C11.4464 6.1181 11.0295 5.70566 10.5153 5.70566L7.4682 5.67099C7.08464 5.67099 6.86553 6.10521 7.09575 6.40966L7.59887 7.13188C7.7882 7.3821 7.89042 7.68655 7.89042 7.99899L7.88775 11.2514C7.88775 11.8172 7.20198 12.0937 6.79487 11.6972C5.41753 10.3559 4.22242 7.61677 3.7922 6.30699C3.66775 5.92788 3.31264 5.67188 2.90998 5.67099L1.26687 5.66699C0.650421 5.66699 0.199754 6.25144 0.36731 6.83988C1.86864 12.1097 4.94909 17.123 10.4389 17.6665C10.9798 17.7199 11.4464 17.2843 11.4464 16.7452V15.0359C11.4464 14.5457 11.8309 14.1243 12.3251 14.1119C12.3424 14.1114 12.3598 14.1114 12.3771 14.1114C13.8291 14.1114 15.4553 16.2248 16.0242 17.2132C16.1878 17.4977 16.4935 17.671 16.8242 17.671H19.0344C19.6793 17.671 20.0931 16.987 19.7824 16.4274Z" fill="#17425A"/>
              </g>
              <defs>
                <clipPath id="clip0_652_1999">
                  <rect width="21.3333" height="21.3333" fill="white" transform="translate(0.332031 0.333252)"/>
                </clipPath>
              </defs>
            </svg>
            <span class="visually-hidden">Поделиться VK</span>
          </button>
        </div>
        <img src="../assets/images/pages/blog/main-blog-image.png" alt="Обложка статьи" class="article-detailed__image" loading="lazy">

        <div class="article-detailed-text">
          <p class="author">Автор статьи: Александр Иванов</p>
          <div class="text">
            <p class="article-detailed-paragraph">При устройстве переходов методом труба в трубе с применением раструбных бетонных или чугунных труб имеется ряд особенностей. Раструбное соединение труб не позволяет осуществлять протаскивание вытягиванием рабочей плети, а уширение диаметра в местах раструба является препятствием при укладке рабочей плети в футляре (дюкере).</p>
            <p class="article-detailed-paragraph">Известны способы прокладки с использованием колесных тележек, но из-за габаритных размеров они не всегда обеспечивают возможность прокладки в существующем футляре (дюкере). Не допускают вращения рабочей плети во время протаскивания, что при протяженных переходах исключить невозможно.</p>
            <p class="article-detailed-paragraph">Для решения данной проблемы применяются опорно-направляющие кольца с роликовыми опорами скольжения. Роликоопоры установлены по всей окружности обечайки ОНК с шагом 60- 90 град. Её высота и несущая способность рассчитывается исходя из типов бетонных или раструбных труб и обеспечивает положение ролика с учетом диаметра раструба. Применение роликоопор по окружности позволяет избежать заклинивания рабочего трубопровода при изменении уклонов, радиусов поворота и при осевом вращении.</p>
            <p class="article-detailed-paragraph">Использование роликовой опоры с применением высокопрочного, антифрикционного полимера позволяет многократно снизить коэффициент трения качения и соответственно тяговое усилие.</p>
            <p class="article-detailed-paragraph">Ролик используемый в конструкции является диэлектриком, что обеспечивает защиту от преждевременной коррозии стальных трубопроводов возникающей от действия блуждающих токов.</p>
            <p class="article-detailed-paragraph">Прочность опоры позволяет обеспечить ее проход без разрушения даже если футляром будет выбрана раструбная труба не исключающая зазор на стыках.</p>
            <p class="article-detailed-paragraph">Установка колец на трубопровод осуществляется болтовым соединением непосредственно на площадке строительства. Для уплотнения места установки роликовых опорно-направляющих колец, в зависимости от типа трубопровода, используется специальная прокладка исключающая сход кольца при его протаскивании.</p>
          </div>
        </div>

        <div class="article-detailed-illustrations">
          <img src="../assets/images/pages/blog/illustration-1.png" alt="Иллюстрация к статье" loading="lazy">
          <img src="../assets/images/pages/blog/illustration-2.png" alt="Иллюстрация к статье" loading="lazy">
          <img src="../assets/images/pages/blog/illustration-3.png" alt="Иллюстрация к статье" loading="lazy">
        </div>
      </div>
    </article>
  </template>
</template>

<style scoped>
.articles-grid {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 16px;
  }
}
@media (min-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1440px) {
  .articles-grid {
    gap: 80px 20px;
  }
}
@media (min-width: 1920px) {
  .articles-grid {
    gap: 104px 22px;
  }
}

.primary-button {
  grid-column: 1/-1;
}
</style>
