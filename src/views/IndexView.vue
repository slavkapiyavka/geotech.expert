<script setup lang="js">
import {nextTick, onMounted, onUnmounted, ref, watchEffect} from "vue";
import { useMovingEffect } from "@/composables/useMovingEffect.js";
import { useVisibilityEffect } from "@/composables/useVisibilityEffect.js";
import Splitting from 'splitting';
import {useParallax} from "@/composables/useParallax.js";

const pageTitle = ref('Главная')
const mainTitle = ref('Геотехзащита')
const listElements = ref([])
const animatedTitles = ref([])
const movingElements = ref([])
const textarea = ref(null)
const { followedElement } = useParallax()
const contactFormName = ref('')
const contactFormPhone = ref('')
const contactFormEmail = ref('')
const contactFormMessage = ref('')
const contactFormAgreement = ref(false)

const contactFormNameError = ref('')
const contactFormPhoneError = ref('')
const contactFormEmailError = ref('')
const contactFormMessageError = ref('')
const contactFormAgreementError = ref('')

const updateTextBasedOnLang = () => {
  const lang = document.documentElement.lang;
  mainTitle.value = lang === 'ru' ? 'Геотехзащита' : 'Geotechprotect';
};

const adjustTextareaHeight = () => {
  nextTick(() => {
    if(textarea.value) {
      textarea.value.style.height = 'auto';
      textarea.value.style.height = `${textarea.value.scrollHeight + 1}px`;
    }
  })
}

const validateName = () => {
  if (!contactFormName.value) {
    contactFormNameError.value = 'Пожалуйста, введите ваше имя';
  } else {
    contactFormNameError.value = '';
  }
};

const validatePhone = () => {
  const phonePattern = /^(\+?\d{1,3})?\s*(\(\d{3}\)|\d{3})?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

  if (!phonePattern.test(contactFormPhone.value)) {
    contactFormPhoneError.value = 'Введите телефон в формате +7 (000) 000-00-00';
  } else {
    contactFormPhoneError.value = '';
  }
};



const validateEmail = () => {
  if (!/\S+@\S+\.\S+/.test(contactFormEmail.value)) {
    contactFormEmailError.value = 'Введите корректный email адрес';
  } else {
    contactFormEmailError.value = '';
  }
};

const validateMessage = () => {
  if (!contactFormMessage.value) {
    contactFormMessageError.value = 'Пожалуйста, введите сообщение';
  } else {
    contactFormMessageError.value = '';
  }
};

const validateAgreement = () => {
  if (!contactFormAgreement.value) {
    contactFormAgreementError.value = 'Необходимо ваше согласие';
  } else {
    contactFormAgreementError.value = '';
  }
};

const validateForm = () => {
  let isValid = true;

  if (!contactFormName.value) {
    contactFormNameError.value = 'Пожалуйста, введите ваше имя';
    isValid = false;
  } else {
    contactFormNameError.value = '';
  }

  if (!/\+7 \(\d{3}\)\d{3}-\d{2}-\d{2}/.test(contactFormPhone.value)) {
    contactFormPhoneError.value = 'Введите телефон в формате +7 (000) 000-00-00';
    isValid = false;
  } else {
    contactFormPhoneError.value = '';
  }

  if (!/\S+@\S+\.\S+/.test(contactFormEmail.value)) {
    contactFormEmailError.value = 'Введите корректный email адрес';
    isValid = false;
  } else {
    contactFormEmailError.value = '';
  }

  if (!contactFormMessage.value) {
    contactFormMessageError.value = 'Пожалуйста, введите сообщение';
    isValid = false;
  } else {
    contactFormMessageError.value = '';
  }

  if (!contactFormAgreement.value) {
    contactFormAgreementError.value = 'Необходимо ваше согласие';
    isValid = false;
  } else {
    contactFormAgreementError.value = '';
  }

  return isValid;
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    console.log('форма отправлена')
  }
}

useMovingEffect();

useVisibilityEffect('.animated-underline');
useVisibilityEffect('.reveal');
useVisibilityEffect('[data-splitting]');

watchEffect(() => {
  updateTextBasedOnLang();
})

onMounted(() => {
  document.title = `${pageTitle.value} | Геотехзащита`;
  listElements.value = document.querySelectorAll('.animated-underline');
  animatedTitles.value = document.querySelectorAll('.animated-title');
  movingElements.value = document.querySelectorAll('.moving');

  Splitting({ by: 'lines' });

  if (textarea.value) {
    adjustTextareaHeight();
  }

  const translationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'lang') {
        updateTextBasedOnLang();
      }
    });
  });

  translationObserver.observe(document.documentElement, {
    attributes: true,
  });

  onUnmounted(() => {
    translationObserver.disconnect();
  })
});
</script>

<template :key="pageTitle">
  <div class="hero-wrapper background-color-white">
    <section class="hero index container">
      <span class="hero__decorative-title reveal reveal_top">Проектный инжиниринг</span>
      <h1 class="hero__title decoration-line reveal reveal_left" translate="no">{{ mainTitle }}</h1>
      <p class="hero__subtitle reveal reveal_left">Проектирование под ключ, на основе технического задания и действующих нормативных
        документов </p>

      <picture class="hero__picture reveal reveal_bottom">
        <source srcset="../assets/images/pages/index/hero-1920.png" media="(min-width: 1920px)">
        <source srcset="../assets/images/pages/index/hero-1440.png" media="(min-width: 1440px)">
        <source srcset="../assets/images/pages/index/hero-1024.png" media="(min-width: 1024px)">
        <source srcset="../assets/images/pages/index/hero-768.png" media="(min-width: 768px)">
        <img width="150" height="190" class="hero__image" src="../assets/images/pages/index/hero-375.png" alt="Изображение строительной техники" loading="lazy">
      </picture>

      <div class="reveal reveal_left">
        <a href="#contactForm" class="primary-button primary-button_orange" v-follow-mouse>Начать проект</a>
      </div>

      <div class="background-shape index"></div>
    </section>
  </div>

  <div class="introduction-wrapper">
    <section class="introduction index container moving">
      <h2 class="introduction__title animated-title" data-splitting>Мы работаем с заказчиками на всей территории россии и стран СНГ</h2>
    </section>
  </div>

  <div class="activity-wrapper">
    <section class="activity container moving">
      <h2 class="activity__title" data-splitting>Направления деятельности</h2>

      <ul class="directions-list">
        <li class="directions-list__element animated-underline">
          <h3 class="direction__title direction__title_geotech heading-fifth">Геотехническое проектирование</h3>
          <p class="direction__text">Расчеты, проектирование и консалтинг грунтовых сооружений</p>
          <p class="direction__text">
            Разработка решений по обеспечению заданной надежности и устойчивости с
            учетом гидравлических, температурных или деформационных воздействий
          </p>
          <p class="direction__text">
            Выполняем расчеты по методам круглоцилиндрических поверхностей скольжения (SAM) и методом конечных
            элементов, методом снижения прочности (SRM)
          </p>
        </li>

        <li class="directions-list__element animated-underline">
          <h3 class="direction__title direction__title_engineering heading-fifth">Инженерная защита</h3>
          <p class="direction__text">
            Расчеты, проектирование и консалтинг устройства инженерной защиты территории
          </p>
          <p class="direction__text">
            Проектирование дамб, подпорных стенок, берегоукрепительных, противоселевых, противокамнепадных сооружений и
            другое
          </p>
        </li>

        <li class="directions-list__element animated-underline">
          <h3 class="direction__title direction__title_eco heading-fifth">Экологическое проектирование</h3>
          <p class="direction__text">
            Проектирование строительства и рекультивации полигонов твердых бытовых / коммунальных отходов, нефтяных
            амбаров, золоотвалов и шлакоотвалов
          </p>
          <p class="direction__text">
            Утилизации и обезвоживания зол, шламов и других отходов
          </p>
          <p class="direction__text">
            Разработка навозных лагун открытого и закрытого типов
          </p>
        </li>

        <li class="directions-list__element">
          <h3 class="direction__title direction__title_pyro heading-fifth">Гидротехническое проектирование</h3>
          <p class="direction__text">
            Проектирование и расчеты дамб, берегоукрепительных сооружений, оросительных каналов, водохранилищ,
            прудов-отстойников, прудов-испарителей
          </p>
          <p class="direction__text">Расчистка рек и озер</p>
        </li>
      </ul>

      <a href="/projects" class="primary-button primary-button_orange" v-follow-mouse>Смотреть проекты</a>
    </section>
  </div>

  <div class="knowledge-wrapper background-color-white" v-adjust-top>
    <section class="knowledge container">
      <h2 class="knowledge__title animated-title" data-splitting>
        Обширный банк знаний о применении <span class="color-orange">современных материалов</span> в строительстве
      </h2>

      <div class="picture-wrapper">
        <p class="knowledge__text-on-image">
          <span class="number heading-first"> >30</span>
          <span class="text heading-fifth">реализованных <br/> проектов</span>
        </p>
        <p class="knowledge__text-on-image">
          <span class="number heading-first">7</span>
          <span class="text heading-fifth">проектов на стадии <br/> реализации</span>
        </p>

        <div ref="followedElement" class="knowledge__image" id="knowledgeImage"></div>
      </div>
    </section>
  </div>

  <div class="advantages-wrapper">
    <section class="advantages container moving">
      <h2 class="advantages__title">Почему с нами работают?</h2>
      <ul class="advantages-list">
        <li class="advantages-list-element">
          <h3 class="advantages-list-element__title">Комфортные условия</h3>
          <p class="advantages-list-element__text">Персональный куратор проекта для быстрого решения вопросов</p>
        </li>
        <li class="advantages-list-element">
          <h3 class="advantages-list-element__title">Гибкая система ценообразования</h3>
          <p class="advantages-list-element__text">Персональные предложения для каждого клиента</p>
        </li>
        <li class="advantages-list-element">
          <h3 class="advantages-list-element__title">Экономия времени</h3>
          <p class="advantages-list-element__text">
            Одновременно с разработкой, мы можем провести экспертизу проектной документации и результатов инженерных
            изысканий
          </p>
        </li>
        <li class="advantages-list-element">
          <h3 class="advantages-list-element__title">Сотрудники с многолетним опытом</h3>
          <p class="advantages-list-element__text">Мы берем ответственность за каждое решение</p>
        </li>
      </ul>
    </section>
  </div>

  <div class="stages-wrapper">
    <section class="stages container moving">
      <h2 class="stages__title heading-second">Этапы проектирования</h2>

      <ul class="stages-list">
        <li class="stages-list__stage stages-list__stage_white">
          <span class="heading-fifth">Эскизные решения</span>
        </li>
        <li class="stages-list__stage stages-list__stage_dark-blue">
          <span class="heading-fifth">Проектная документация</span>
        </li>
        <li class="stages-list__stage stages-list__stage_orange">
          <span class="heading-fifth">Рабочая документация</span>
        </li>
      </ul>

      <a href="/engineering" class="primary-button primary-button_orange" v-follow-mouse>Проектирование</a>
    </section>
  </div>

  <div class="blog-wrapper background-color-white">
    <section class="blog container">
      <h2 class="blog__title">Блог</h2>

      <div class="articles-wrapper">
        <article class="article-preview">
          <time class="article-preview__date tag" datetime="2023-06-25">25.06.23</time>
          <h6 class="article-preview__title short-text-three">Подземные переходы трубопроводов с применением раструбных труб</h6>
          <p class="article-preview__excerpt short-text-two">
            При устройстве переходов методом труба в трубе с применением раструбных бетонных или чугунных труб имеется ряд особенностей. Раструбное соединение труб не позволяет осуществлять протаскивание вытягиванием рабочей плети, а уширение диаметра в местах раструба является препятствием при укладке рабочей плети в футляре (дюкере).
          </p>
          <a href="##" class="article-preview__link">читать статью</a>
        </article>
        <article class="article-preview">
          <time class="article-preview__date tag" datetime="2023-06-25">25.06.23</time>
          <h6 class="article-preview__title short-text-three">
            Проектирование систем водоотведения в сложных климатических условиях
          </h6>
          <p class="article-preview__excerpt short-text-two">
            Создание эффективных систем водоотведения в регионах с экстремальными погодными условиями требует применения специальных технологических решений. Необходимо учитывать возможность температурных колебаний, которые могут привести к деформации трубопроводов, а также использовать материалы, устойчивые к коррозии и образованию ледяных заторов.
          </p>
          <a href="##" class="article-preview__link">читать статью</a>
        </article>
        <article class="article-preview">
          <time class="article-preview__date tag" datetime="2023-06-25">25.06.23</time>
          <h6 class="article-preview__title short-text-three">
            Монтаж наружных трубопроводов с использованием антивибрационных креплений
          </h6>
          <p class="article-preview__excerpt short-text-two">
            Для предотвращения повреждения наружных трубопроводов из-за вибраций и температурных расширений, применяются антивибрационные крепления. Эти элементы позволяют трубам "играть", компенсируя вибрации от проходящего транспорта и температурные изменения, тем самым снижая риск трещин и разрывов в системе.
          </p>
          <a href="##" class="article-preview__link">читать статью</a>
        </article>
      </div>

      <a class="primary-button primary-button_orange" href="/blog" v-follow-mouse>Все статьи</a>
    </section>
  </div>

  <div class="contact-form-wrapper" id="contactForm">
    <section class="contact-form container" aria-labelledby="contact-form-header">
      <h2 id="contact-form-title" class="contact-form__title heading-second">Оставьте заявку</h2>
      <p class="contact-form__description font-text2">Наш менеджер свяжется с вами в течении 24 часов</p>

      <form class="contact-form__form font-text2" action="/submit-form" method="post">
        <fieldset class="contact-form__fieldset">
          <label for="name" class="contact-form__label">
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Иван Иванов"
                class="contact-form__input"
                :class="{ 'error': contactFormNameError }"
                required
                @input="validateName"
                v-model="contactFormName"
            >
            <span v-if="contactFormNameError" class="input-error-message">
                <svg class="icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6.5" r="6" fill="#FF7E7E"/>
                  <path d="M6.45134 2.68164L6.38658 8.11761H5.5547L5.48497 2.68164H6.45134ZM5.45508 9.77181C5.45508 9.61575 5.49991 9.48397 5.58957 9.37646C5.68256 9.26896 5.81871 9.21521 5.99804 9.21521C6.17405 9.21521 6.30854 9.26896 6.40153 9.37646C6.49783 9.48397 6.54599 9.61575 6.54599 9.77181C6.54599 9.92093 6.49783 10.0492 6.40153 10.1567C6.30854 10.2643 6.17405 10.318 5.99804 10.318C5.81871 10.318 5.68256 10.2643 5.58957 10.1567C5.49991 10.0492 5.45508 9.92093 5.45508 9.77181Z" fill="#17425A"/>
                </svg>
                {{ contactFormNameError }}
            </span>
          </label>

          <label for="phone" class="contact-form__label">
            <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7(000)900-00-00"
                class="contact-form__input"
                :class="{ 'error': contactFormPhoneError }"
                required
                @input="validatePhone"
                v-model="contactFormPhone"
            />
            <span v-if="contactFormPhoneError" class="input-error-message">
                <svg class="icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6.5" r="6" fill="#FF7E7E"/>
                  <path d="M6.45134 2.68164L6.38658 8.11761H5.5547L5.48497 2.68164H6.45134ZM5.45508 9.77181C5.45508 9.61575 5.49991 9.48397 5.58957 9.37646C5.68256 9.26896 5.81871 9.21521 5.99804 9.21521C6.17405 9.21521 6.30854 9.26896 6.40153 9.37646C6.49783 9.48397 6.54599 9.61575 6.54599 9.77181C6.54599 9.92093 6.49783 10.0492 6.40153 10.1567C6.30854 10.2643 6.17405 10.318 5.99804 10.318C5.81871 10.318 5.68256 10.2643 5.58957 10.1567C5.49991 10.0492 5.45508 9.92093 5.45508 9.77181Z" fill="#17425A"/>
                </svg>
                {{ contactFormPhoneError }}
            </span>
          </label>

          <label for="email" class="contact-form__label">
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email@gmail.com"
                class="contact-form__input"
                :class="{ 'error': contactFormEmailError }"
                v-model="contactFormEmail"
                @input="validateEmail"
                required
            >
            <span v-if="contactFormEmailError" class="input-error-message">
                <svg class="icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6.5" r="6" fill="#FF7E7E"/>
                  <path d="M6.45134 2.68164L6.38658 8.11761H5.5547L5.48497 2.68164H6.45134ZM5.45508 9.77181C5.45508 9.61575 5.49991 9.48397 5.58957 9.37646C5.68256 9.26896 5.81871 9.21521 5.99804 9.21521C6.17405 9.21521 6.30854 9.26896 6.40153 9.37646C6.49783 9.48397 6.54599 9.61575 6.54599 9.77181C6.54599 9.92093 6.49783 10.0492 6.40153 10.1567C6.30854 10.2643 6.17405 10.318 5.99804 10.318C5.81871 10.318 5.68256 10.2643 5.58957 10.1567C5.49991 10.0492 5.45508 9.92093 5.45508 9.77181Z" fill="#17425A"/>
                </svg>
                {{ contactFormEmailError }}
            </span>
          </label>

          <label for="message" class="contact-form__label">
            <textarea
                @input="adjustTextareaHeight"
                ref="textarea"
                id="message"
                name="message"
                class="contact-form__textarea"
                :class="{ 'error': contactFormMessageError }"
                rows="1"
                placeholder="Сообщение"
                v-model="contactFormMessage"
                @change="validateMessage"
                required
            ></textarea>

            <span v-if="contactFormMessageError" class="input-error-message">
                <svg class="icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6.5" r="6" fill="#FF7E7E"/>
                  <path d="M6.45134 2.68164L6.38658 8.11761H5.5547L5.48497 2.68164H6.45134ZM5.45508 9.77181C5.45508 9.61575 5.49991 9.48397 5.58957 9.37646C5.68256 9.26896 5.81871 9.21521 5.99804 9.21521C6.17405 9.21521 6.30854 9.26896 6.40153 9.37646C6.49783 9.48397 6.54599 9.61575 6.54599 9.77181C6.54599 9.92093 6.49783 10.0492 6.40153 10.1567C6.30854 10.2643 6.17405 10.318 5.99804 10.318C5.81871 10.318 5.68256 10.2643 5.58957 10.1567C5.49991 10.0492 5.45508 9.92093 5.45508 9.77181Z" fill="#17425A"/>
                </svg>
                {{ contactFormMessageError }}
            </span>
          </label>
        </fieldset>

        <div class="contact-form__checkbox" :class="{ 'error': contactFormAgreementError }">
          <input
              type="checkbox"
              id="agreement"
              name="agreement"
              class="contact-form__input custom-checkbox visually-hidden"
              required
              @change="validateAgreement"
          >
          <label for="agreement" class="contact-form__label contact-form__label_checkbox">
            Я согласен(-на) с обработкой персональных данных
          </label>

          <span v-if="contactFormAgreementError" class="input-error-message">
                <svg class="icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6.5" r="6" fill="#FF7E7E"/>
                  <path d="M6.45134 2.68164L6.38658 8.11761H5.5547L5.48497 2.68164H6.45134ZM5.45508 9.77181C5.45508 9.61575 5.49991 9.48397 5.58957 9.37646C5.68256 9.26896 5.81871 9.21521 5.99804 9.21521C6.17405 9.21521 6.30854 9.26896 6.40153 9.37646C6.49783 9.48397 6.54599 9.61575 6.54599 9.77181C6.54599 9.92093 6.49783 10.0492 6.40153 10.1567C6.30854 10.2643 6.17405 10.318 5.99804 10.318C5.81871 10.318 5.68256 10.2643 5.58957 10.1567C5.49991 10.0492 5.45508 9.92093 5.45508 9.77181Z" fill="#17425A"/>
                </svg>
                {{ contactFormAgreementError }}
            </span>
        </div>

        <div class="contact-form__file-upload">
          <label for="file-upload" class="contact-form__label contact-form__label_file-upload">
            <span class="label">Прикрепить файл</span>

            <input id="file-upload" name="file-upload" type="file" class="visually-hidden">
          </label>
        </div>

        <button
            type="submit"
            class="contact-form__submit primary-button primary-button_orange"
            v-follow-mouse
            @click="handleSubmit"
        >
          Отправить
        </button>
      </form>
    </section>
  </div>
</template>

<style scoped>
.activity-wrapper {
  background-color: var(--white);
}

.activity__title {
  margin: 0 0 40px 0;
}

@media (min-width: 768px) {
  .activity {
    display: grid;
    grid-template-areas:
      'title button'
      'list list';
    grid-template-columns: auto;
    gap: 40px;
  }

  .activity__title {
    grid-area: title;
    margin-bottom: 0;
  }

  .activity .directions-list {
    grid-area: list;
    margin-bottom: 0;
  }

  .activity .primary-button {
    grid-area: button;
    justify-self: end;
  }
}

@media (min-width: 1440px) {
  .activity {
    gap: 80px 0;
  }
}

@media (min-width: 1920px) {
  .activity {
    gap: 100px 0;
  }
}

.direction__title {
  width: min-content;
}

@media (min-width: 768px) {
  .direction__title {
    margin-bottom: 14px;
  }
}

@media (min-width: 1024px) {
  .direction__title {
    margin-bottom: 0;
  }
}

@media (min-width: 1440px) {
  .direction__title {
    grid-column: 2;
    height: 0;
  }
}

.direction__text {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text1-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text1-line-height);
  letter-spacing: var(--font-text1-letter-spacing);
  margin: 0;
  color: var(--dark-blue-75);
  grid-column: 1 / -1;
}

@media (min-width: 768px) {
  .direction__text {
    grid-column-start: 2;
  }
}

@media (min-width: 1024px) {
  .direction__text {
    grid-column-start: 3;
  }
}

.directions-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .directions-list {
    gap: 24px;
  }
}

@media (min-width: 1440px) {
  .directions-list {
    gap: 30px;
  }
}

.directions-list__element {
  position: relative;
  display: grid;
  grid-template-columns: min-content auto;
  gap: 20px;
  grid-template-rows: repeat(auto-fit,minmax(min-content,20px));
}

@media (min-width: 768px) {
  .directions-list__element {
    gap: 14px 68px;
  }

  .directions-list__element:nth-child(3n+3) {
    grid-column: 2 / -1;
  }
}

@media (min-width: 1024px) {
  .directions-list__element {
    gap: 14px;
    grid-template-columns: 1fr 2fr 3fr;
  }
}

@media (min-width: 1920px) {
  .directions-list__element {
    gap: 20px;
  }
}

.directions-list__element:not(:last-of-type) {
  padding-bottom: 40px;
}

@media (min-width: 1440px) {
  .directions-list__element:not(:last-of-type) {
    border-width: 2px;
    min-height: 250px;
  }
}

@media (min-width: 1920px) {
  .directions-list__element:not(:last-of-type) {
    min-height: 330px;
  }
}

.directions-list__element.animated-underline::after {
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

.directions-list__element.animated-underline.visible::after {
  width: 100%;
}

.directions-list__element::before {
  --decorative-icon-size: 40px;
  content: "";
  display: block;
  width: var(--decorative-icon-size);
  height: var(--decorative-icon-size);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

@media (min-width: 768px) {
  .directions-list__element::before {
    --decorative-icon-size: 44px;
  }
}

@media (min-width: 1440px) {
  .directions-list__element::before {
    --decorative-icon-size: 60px;
    grid-row: 1 / -1;
    position: absolute;
  }
}

@media (min-width: 1920px) {
  .directions-list__element::before {
    --decorative-icon-size: 80px;
  }
}

.directions-list__element:nth-child(4n+1)::before {
  background-image: url("../assets/icons/index/directions-first.svg");
}

.directions-list__element:nth-child(4n+2)::before {
  background-image: url("../assets/icons/index/directions-second.svg");
}

.directions-list__element:nth-child(4n+3)::before {
  background-image: url("../assets/icons/index/directions-third.svg");
}

.directions-list__element:nth-child(4n+4)::before {
  background-image: url("../assets/icons/index/directions-fourth.svg");
}

.knowledge {
  padding-top: 4px;
  padding-bottom: 10px;
}

@media (min-width: 768px) {
  .knowledge {
    padding-bottom: 20px;
  }
}

@media (min-width: 1440px) {
  .knowledge {
    padding-bottom: 30px;
  }
}

@media (min-width: 1920px) {
  .knowledge {
    padding-bottom: 40px;
  }
}

.knowledge__title {
  margin-bottom: 4px;
}

@media (min-width: 768px) {
  .knowledge__title {
    margin-bottom: 8px;
  }
}

@media (min-width: 1440px) {
  .knowledge__title {
    margin-bottom: 12px;
  }
}

@media (min-width: 1920px) {
  .knowledge__title {
    margin-bottom: 0;
  }
}

.knowledge__image {
  height: 550px;
  background-image: url("../assets/images/pages/index/knowledge-375.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100%;
  background-attachment: local;
}

@media (min-width: 768px) {
  .knowledge__image {
    height: 450px;
    background-image: url("../assets/images/pages/index/knowledge-768.png");
  }
}

@media (min-width: 1024px) {
  .knowledge__image {
    background-image: url("../assets/images/pages/index/knowledge-1024.png");
  }
}

@media (min-width: 1440px) {
  .knowledge__image {
    background-image: url("../assets/images/pages/index/knowledge-1440.png");
  }
}

@media (min-width: 1920px) {
  .knowledge__image {
    height: 600px;
    background-image: url("../assets/images/pages/index/knowledge-1920.png");
  }
}

.knowledge__text-on-image {
  position: absolute;
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin: 0;
  color: var(--white);
  z-index: 1;
}

.knowledge__text-on-image:first-of-type {
  left: 10px;
  top: 160px;
}

@media (min-width: 768px) {
  .knowledge__text-on-image:first-of-type {
    left: 60px;
    top: 220px;
  }
}

@media (min-width: 1440px) {
  .knowledge__text-on-image:first-of-type {
    left: 60px;
    top: 200px;
  }
}

@media (min-width: 1920px) {
  .knowledge__text-on-image:first-of-type {
    left: 82px;
    top: 314px;
  }
}

.knowledge__text-on-image:last-of-type {
  right: 14px;
  bottom: 80px;
}

@media (min-width: 768px) {
  .knowledge__text-on-image:last-of-type {
    right: 150px;
    bottom: 54px;
  }
}

@media (min-width: 1024px) {
  .knowledge__text-on-image:last-of-type {
    right: 400px;
    bottom: 54px;
  }
}

@media (min-width: 1440px) {
  .knowledge__text-on-image:last-of-type {
    right: 484px;
    bottom: 20px;
  }
}

@media (min-width: 1920px) {
  .knowledge__text-on-image:last-of-type {
    right: 646px;
    bottom: 26px;
  }
}

.picture-wrapper {
  position: relative;
}

.advantages {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  position: relative;
  padding-bottom: 0;
}

@media (min-width: 1440px) {
  .advantages {
    grid-template-columns: repeat(12, 1fr);
    gap: 0;
  }
}

.advantages::after {
  content: "";
  position: absolute;
  left: var(--horizontal-padding);
  right: var(--horizontal-padding);
  bottom: 0;
  height: 1px;
  background-color: currentColor;
}

.advantages__title {
  max-width: 58vw;
}

@media (min-width: 1440px) {
  .advantages__title {
    grid-column: 1 / 6;
  }
}

.advantages-wrapper {
  background-color: var(--beige);
}
.advantages-list {
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  margin-left: 18px;
}

.advantages-list::after {
  content: "";
  position: absolute;
  left: -18px;
  bottom: 0;
  width: 18px;
  height: 1px;
  background-color: currentColor;
}

@media (min-width: 1440px) {
  .advantages-list {
    grid-column: 7 / -1;
  }
}

@media (min-width: 768px) {
  .advantages-list {
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  .advantages-list::after {
    display: none;
  }
}

.advantages-list-element {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px 80px 8px;
  border-left: 1px solid var(--dark-blue);
}

@media (min-width: 768px) {
  .advantages-list-element {
    max-width: 94%;
    padding-left: 12px;
    padding-bottom: 100px;
  }
}

@media (min-width: 1440px) {
  .advantages-list-element {
    padding-left: 18px;
    padding-bottom: 130px;
  }
}

@media (min-width: 1440px) {
  .advantages-list-element {
    padding-left: 24px;
    padding-bottom: 232px;
  }
}

.advantages-list-element__title {
  margin: 0;
  text-transform: uppercase;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-h5-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-h5-line-height);
  letter-spacing: var(--font-h5-letter-spacing);
  text-wrap: wrap;
}

@media (min-width: 768px) {
  .advantages-list-element__title {
    text-wrap: balance;
  }
}

@media (min-width: 1024px) {
  .advantages-list-element__title {
    max-width: 30ch;
  }
}

.advantages-list-element__text {
  margin: 0;
  max-width: 98%;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text1-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text1-line-height);
  letter-spacing: var(--font-text1-letter-spacing);
  color: var(--dark-blue-75);
}

@media (min-width: 1024px) {
  .advantages-list-element__text {
    max-width: 70%;
  }
}

@media (min-width: 1440px) {
  .advantages-list-element__text {
    max-width: none;
  }
}

@media (min-width: 1920px) {
  .advantages-list-element__text {
    max-width: 94%;
    text-wrap: wrap;
  }
}

.stages {
  display: grid;
  grid-template-areas:
    'title'
    'list'
    'button';
  gap: 12px;
}

@media (min-width: 768px) {
  .stages {
    grid-template-areas:
      'title button'
      'list list';
    grid-template-rows: auto 1fr;
    gap: 26px;
    justify-content: space-between;
  }
}

@media (min-width: 1440px) {
  .stages {
    gap: 30px;
  }
}

@media (min-width: 1920px) {
  .stages {
    gap: 60px;
  }
}

.stages-wrapper {
  background-color: var(--beige);
}

.stages__title {
  grid-area: title;
  margin: 0;
}

.stages-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  grid-area: list;
}

@media (min-width: 768px) {
  .stages-list {
    flex-direction: row;
    margin-bottom: 0;
  }
}

@media (min-width: 1440px) {
  .stages-list {
    padding: 0 7px;
  }
}

@media (min-width: 1920px) {
  .stages-list {
    padding: 0 20px;
  }
}

.stages-list__stage {
  aspect-ratio: 1;
  width: 100%;
  display: grid;
  place-items: center;
  border-radius: 50%;
}

.stages-list__stage:nth-child(n+2) {
  margin-top: -28%;
}

@media (min-width: 768px) {
  .stages-list__stage {
    margin-top: 0;
    height: 100%;
  }

  .stages-list__stage:nth-child(n+2) {
    margin-top: 0;
    margin-left: -50px;
  }
}

@media (min-width: 1024px) {
  .stages-list__stage:nth-child(n+2) {
    margin-left: 0;
  }
}

.stages-list__stage_white {
  color: var(--dark-blue);
  background-color: var(--white);
  border: 1px solid var(--white);
  transition: background-color 275ms, color 275ms, border-color 275ms;
}

@media (min-width: 768px) {
  .stages-list__stage_white:hover {
    color: var(--dark-blue);
    border: 1px solid var(--dark-blue);
    background-color: transparent;
  }
}

.stages-list__stage_dark-blue {
  color: var(--white);
  border: 1px solid var(--dark-blue);
  background-color: var(--dark-blue);
  transition: background-color 275ms, color 275ms;
}

@media (min-width: 768px) {
  .stages-list__stage_dark-blue:hover {
    color: var(--dark-blue);
    background-color: transparent;
  }
}

.stages-list__stage_orange {
  color: var(--white);
  border: 1px solid var(--orange);
  background-color: var(--orange);
  transition: background-color 275ms, color 275ms;
}

@media (min-width: 768px) {
  .stages-list__stage_orange:hover {
    color: var(--orange);
    background-color: transparent;
  }
}

.stages-list__stage span {
  text-align: center;
  width: min-content;
}

.stages .primary-button {
  grid-area: button;
}

.blog {
  display: grid;
  grid-template-areas:
    'title'
    'articles'
    'button';
  gap: 40px;
}

@media (min-width: 768px) {
  .blog {
    grid-template-areas:
      'title title button'
      'articles articles articles';
  }
}

.blog .primary-button {
  grid-area: button;
}

.articles-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  grid-area: articles;
}

@media (min-width: 768px) {
  .articles-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .articles-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}

.article-preview {
  display: flex;
  flex-direction: column;
}

.article-preview__date {
  margin: 0 0 16px;
}

.article-preview__title {
  margin: 0 0 8px;
  grid-area: title;
}

.article-preview__excerpt {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text2-line-height);
  letter-spacing: var(--font-text2-letter-spacing);
  margin: 0 0 16px;
  color: var(--dark-blue-50);
}

.article-preview__link {
  width: fit-content;
  position: relative;
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-button2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-button2-line-height);
  letter-spacing: var(--font-button2-letter-spacing);
  text-transform: uppercase;
  color: var(--dark-blue);
  transition: color 125ms;
  text-decoration: none;
}

.article-preview__link::after {
  content: "";
  position: absolute;
  height: 1px;
  bottom: -4px;
  right: 0;
  left: 0;
  background-color: currentColor;
}

.article-preview__link:hover {
  color: var(--orange);
}

.article-preview__link:hover::after {
  animation: underlineMove 750ms both;
}

@keyframes underlineMove {
  from {
    left: 0;
    right: 0;
    opacity: 1;
  }
  25% {
    left: 100%;
    right: 0;
    opacity: 1;
  }
  26% {
    left: 100%;
    right: 0;
    opacity: 0;
  }
  27% {
    left: 0;
    right: 100%;
    opacity: 0;
  }
  28% {
    left: 0;
    right: 100%;
    opacity: 1;
  }
  29% {
    left: 0;
    right: 100%;
    opacity: 1;
  }
  to {
    left: 0;
    right: 0;
    opacity: 1;
  }
}

.contact-form {
  display: grid;
  grid-template-areas:
    'title'
    'description'
    'form';
}

@media (min-width: 1024px) {
  .contact-form {
    grid-template-areas:
      'title form'
      'description form';
    grid-template-rows: auto 1fr;
  }
}

.contact-form-wrapper {
  background-color: var(--dark-blue);
  color: var(--white);
}

.contact-form__title {
  margin: 0 0 2px 0;
  grid-area: title;
}

.contact-form__description {
  margin: 0 0 40px 0;
  grid-area: description;
}

.contact-form__form {
  grid-area: form;
  display: grid;
  grid-template-areas:
    'fieldset'
    'checkbox'
    'file-upload'
    'button';
}

@media (min-width: 768px) {
  .contact-form__form {
    grid-template-areas:
      'fieldset fieldset'
      'checkbox file-upload'
      'button button';
    grid-template-rows: 1fr min-content min-content;
  }
}

.contact-form__fieldset {
  grid-area: fieldset;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 0 24px 0;
  padding: 0;
  border: none;
}

.contact-form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-form__label_checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: var(--white-60);
  transition: color 125ms;
}

.contact-form__label_checkbox::before {
  --custom-checkbox-size: 10px;
  content: '';
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--custom-checkbox-size);
  height: var(--custom-checkbox-size);
  border: 1px solid currentColor;
  background-image: url("../assets/icons/mark-icon.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 calc(var(--custom-checkbox-size) * -1);
  transition: background-position 75ms;
}

@media (min-width: 1440px) {
  .contact-form__label_checkbox::before {
    --custom-checkbox-size: 16px;
  }
}

@media (min-width: 1920px) {
  .contact-form__label_checkbox::before {
    --custom-checkbox-size: 20px;
  }
}

.contact-form__label_file-upload::before {
  content: '';
  position: absolute;
  inset: 0;
}

.contact-form .custom-checkbox {
  &:checked {
    color: var(--white);

    & + .contact-form__label_checkbox {
      color: var(--white);

      &::before {
        background-position: 0 0;
      }
    }
  }

  &:focus-visible {
    & + .contact-form__label_checkbox::before {
      outline-offset: 2px;
      outline: 1px solid var(--orange);
    }
  }
}

.contact-form__input,
.contact-form__textarea {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text2-line-height);
  letter-spacing: var(--font-text2-letter-spacing);
  background-color: transparent;
  height: auto;
  padding: 8px 0;
  border: 0;
  color: var(--white);
  border-bottom: 1px solid var(--white);
  border-radius: 0;
  resize: none;
}

@media (min-width: 1440px) {
  .contact-form__input,
  .contact-form__textarea {
    padding: 9px 0;
  }
}

@media (min-width: 1920px) {
  .contact-form__input,
  .contact-form__textarea {
    padding: 12px 0;
  }
}

.contact-form__input::placeholder,
.contact-form__textarea::placeholder {
  font-family: var(--font-nevermind-compact);
  font-size: var(--font-text2-size);
  font-weight: var(--regular-font-weight);
  line-height: var(--font-text2-line-height);
  letter-spacing: var(--font-text2-letter-spacing);
  color: var(--white-30);
  transition: color 125ms;
}

.contact-form__input:hover,
.contact-form__input:focus,
.contact-form__input:focus-visible,
.contact-form__textarea:hover,
.contact-form__textarea:focus,
.contact-form__textarea:focus-visible {
  outline: none;
}

.contact-form__input:hover::placeholder,
.contact-form__input:focus::placeholder,
.contact-form__input:focus-visible::placeholder,
.contact-form__textarea:hover::placeholder,
.contact-form__textarea:focus::placeholder,
.contact-form__textarea:focus-visible::placeholder {
  color: var(--white);
}

.contact-form__input.error,
.contact-form__textarea.error {
  color: var(--error);
  border-color: var(--orange);
}

.contact-form__input.error::placeholder,
.contact-form__textarea.error::placeholder {
  color: var(--error);
}

.contact-form .input-error-message {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--error);

  .icon {
    width: 10px;
    height: 10px;

    @media (min-width: 1440px) {
      width: 12px;
      height: 12px;
    }

    @media (min-width: 1920px) {
      width: 14px;
      height: 14px;
    }
  }
}

.contact-form__checkbox {
  margin-bottom: 40px;
}

.contact-form__checkbox.error * {
  color: var(--orange);
}

@media (min-width: 768px) {
  .contact-form__checkbox {
    align-self: center;
  }
}

.contact-form__file-upload {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 6px 10px 6px 6px;
  width: fit-content;
  background-color: var(--white-30);
  border-radius: 26px;
  margin-bottom: 40px;
  transition: background-color 125ms, color 125ms;
  transition-delay: 50ms;
}

.contact-form__file-upload::before {
  --paperclip-icon-size: 28px;
  content: url("../assets/icons/paperclip.svg");
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2px;
  width: var(--paperclip-icon-size);
  height: var(--paperclip-icon-size);
  border-radius: var(--paperclip-icon-size);
  background-color: var(--white);
}

@media (min-width: 1920px) {
  .contact-form__file-upload::before {
    --paperclip-icon-size: 30px;
    padding-top: 0;
  }
}

.contact-form__file-upload:hover {
  background-color: var(--white-60);
}

@media (min-width: 768px) {
  .contact-form__file-upload {
    justify-self: right;
  }
}

@media (min-width: 1024px) {
  .contact-form__submit:hover,
  .contact-form__submit:focus-visible {
    border-color: var(--white);
    background-color: transparent;
    color: var(--white);
  }
}

.contact-form__file-upload:has(#file-upload:focus-visible) {
  outline-offset: 2px;
  outline: 1px solid var(--orange);
  background-color: var(--white-60);
}
</style>
