<template>

  <main class="main" :class="{ main_mobile: mobileView}" >
    <div class="logo_main" :class="{logo_main_mobile: mobileView}" id="header0">
      <div class="logo_shadow">
      </div>
      <p class="description_main" :class="{ description_main_mobile: mobileView}">
        Глобальное Снабжение<span
        class="nbsp">&nbsp;&nbsp;</span>и<span
        class="nbsp">&nbsp;&nbsp;</span>Логистика
      </p>

    </div>
    <div class="heading__bar" id="header1">
      <h1 class="content__header_text" :class="{ content__header_text_mobile: mobileView}">
        Услуги
      </h1>
    </div>
    <section class="services" :class="{ services_mobile: mobileView}">
      <service-cart class="service_cart"
        v-for="cart in carts"
        :content = "cart.content"
        :key="cart.id">
      </service-cart>
    </section>
    <div class="heading__bar" id="header2">
      <h1 class="content__header_text" :class="{ content__header_text_mobile: mobileView}">
        Дополнительные услуги
      </h1>
    </div>
    <section class="a_services">
      <div class="a_content" :class="{ a_content_mobile: mobileView}">
        <div class="a__left">
          <img src="../assets/camera.jpg" alt="" class="a_services__img"
               :class="{ a_services__img_mobile: mobileView}">
        </div>
        <div class="a__right">
          <p class="a_content__text">
            Обслуживание и ремонт стационарных аппаратных комплексов автоматического определения
            нарушений правил дорожного движения.
          </p>
        </div>
      </div>
      <div class="a_additional">
        <div class="a_button">
          Подробнее
        </div>
      </div>
    </section>
    <div class="heading__bar" >
      <h1 class="content__header_text" :class="{ content__header_text_mobile: mobileView}">
        Наши партнеры
      </h1>
    </div>
    <section class="partners ">
      <img
        src="../assets/kisspng-lukoil7.png"
        alt="" class="partners__img">
      <img src="../assets/rosn.jpg" alt="" class="partners__img">
      <img src="../assets/logo-pgk.png" alt="" class="partners__img">
      <img src="../assets/RT_full_logo-RGB_Vertical_rus.png" alt="" class="partners__img">
      <img src="../assets/dellin.png" alt="" class="partners__img">
    </section>
    <div class="heading__bar" id="header3">
      <h1 class="content__header_text" :class="{ content__header_text_mobile: mobileView}">
        Контакты
      </h1>
    </div>
    <section class="contacts" :class="{ contacts_mobile: mobileView }">
      <div class="contacts__left" :class="{ contacts__left_mobile: mobileView }">
        <ul class="contacts__list">
          <li class="contacts__item">
            Мы работаем с 9.00 до 18.00
            с понедельника по пятницу
          </li>
          <li class="contacts__item">
            <span style="font-weight: bold">Адрес:</span>
            450077, РБ, г.Уфа, ул.Коммунистическая д.45/3, офис 212
          </li>
          <li class="contacts__item">
            <span style="font-weight: bold">Телефон:</span>
            +7 (347) 273-17-51
          </li>
          <li class="contacts__item">
            <span style="font-weight: bold">Факс:</span>
            +7 (347) 273-17-63
          </li>
          <li class="contacts__item">
            <span style="font-weight: bold">Whatsapp/Telegram/Viber:</span>
            +7 (917) 410-43-32
          </li>
          <li class="contacts__item">
            <span style="font-weight: bold">Email:</span>
            info@bashpro.ru
          </li>

        </ul>
      </div>
      <div class="contacts__right" :class="{ contacts__right_mobile: mobileView }">
        <yandex-map
          class="yandex__map"
          :coords="[54.62896654088406, 39.731893822753904]"
          zoom="11"
          :controls="['zoomControl', 'routeButtonControl']"
          map-type="map"
          @map-was-initialized="initHandler"
        >
          <ymap-marker
            marker-id="f1"
            marker-type="placemark"
            :coords="[54.6, 39.8]"
            hint-content="Hint content 1"
            :balloon="{header: 'header', body: 'body', footer: 'footer'}"
          >
          </ymap-marker>
      </yandex-map>
      </div>
    </section>

  </main>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/ServiceCart.vue';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import ServiceCart from '../components/ServiceCart.vue';

export default {
  data: () => ({
    carts: [
      {
        id: 1,
        content: {
          faIcon: 'search',
          header: 'Сорсинг',
          description: 'Поиск дополнительных поставщиков '
            + 'и производителей, предоставляющих лучшее качество,'
            + ' сроки поставок и ценнобразование.',
        },
      },
      {
        id: 2,
        content: {
          faIcon: 'handshake',
          header: 'Консолидация поставщиков',
          description: 'Объединение нескольких поставщиков и производителей в один заказ.',
        },
      },
      {
        id: 3,
        content: {
          faIcon: 'coins',
          header: 'Финансирование',
          description: 'Выполнение необходимых предоплат поставщикам и производителям.',
        },
      },
      {
        id: 4,
        content: {
          faIcon: 'clipboard-list',
          header: 'Комплексные заказы',
          description: 'Закуп импортной продукции, международная логистика, таможенная очистка,'
            + ' сертификация, местная логистика и рублевая конвертация.',
        },
      },
      {
        id: 5,
        content: {
          faIcon: 'shipping-fast',
          header: 'Транспортная логистика',
          description: 'Организации доставки по оптимальному маршруту на выгодных условиях.',
        },
      },
      {
        id: 6,
        content: {
          faIcon: 'project-diagram',
          header: 'Дистрибьюторский сервис',
          description: 'Представление продукции международных и'
            + ' российских производителей на дилерских основах.',
        },
      },
    ],
    coords: [
      54.82896654088406,
      39.831893822753904,
    ],
  }),
  name: 'Home',
  components: {
    ServiceCart,
    yandexMap,
    ymapMarker,
  },
  methods: {
    initHandler(obj) {
      return obj;
    },
  },
  computed: {
    faIconSize() {
      return this.mobileView ? '1x' : '2x';
    },
    mobileView() {
      return (this.$mq === 'mobile');
    },
  },
};
</script>

<style scoped lang="scss">

  * {
    margin: 0;
    padding: 0;
  }

  .nbsp {
    padding: 0 4px;
  }

  #app {
    width: 100%;
  }

  .main {
    font-family: 'Montserrat', sans-serif;
    margin: 0 64px;
    position: relative;
  }
  .main_mobile {
    margin: 0 8px;
  }

  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #fff;
    border: 3px solid black;
    position: fixed;
    z-index: 3000;

  }

  .header__shadow {
    height: 100px;
    width: 100%;

  }

  .heading__bar {
    margin: 24px 0;
    display: flex;
    background-color: #514271;
    align-items: center;
    justify-content: flex-start;
  }

  .content__header_text {
    padding: 8px 24px;
    color: white;
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1.5px;
    text-align: start;
  }

  .content__header_text_mobile {
    font-size: 24px;
  }

  .logo {
    width: 120px;
    height: 82px;
    background-image: url(../assets/gcdp-logo.png);
    margin-left: 24px;
  }

  .phone {
    color: #514271;
    font-size: 42px;
  }

  .menu__button {
    color: #514271;
    font-size: 60px;
    margin-right: 24px;
  }

  .logo_main {
    display: flex;
    justify-content: center;
    background-image: url(../assets/perevozki-gruzov.jpg);
    width: 100%;
    height: 20vw;
    background-size: cover;
    position: relative;
    margin: 0 auto;
  }

  .logo_main_mobile {
  }

  .logo_shadow {
    position: absolute;
    width: inherit;
    height: inherit;
    left: 0;
    top: 0;
    background-color: #000;
    opacity: 0.3;
    z-index: 1000;
    margin: 0 auto;
  }

  .content {
    margin: 0 auto;
  }

  .description_main {
    padding: 1.5vw 78px;
    font-size: 5vw;
    color: white;
    position: absolute;
    z-index: 1001;
    opacity: 0.85;
    text-align: center;
    top: 24px;
  }

  .description_main_mobile {
    padding: 0 64px;
  }

  .description_dop {
    padding: 0 128px;
    font-size: 20px;
    color: white;
  }

  .services {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 0;
  }
  .services_mobile{
    flex-direction: column;
  }
  .a_content {
    display: flex;
    justify-content: flex-start;
    padding: 0 16px;
    color: #514271;
    margin-bottom: 16px;
  }

  .a_content_mobile {
    flex-wrap: nowrap;
    justify-content: center;
  }

  .a_services__img {
    display: inline-block;
    height: 150px;
  }
  .a_services__img_mobile{
    height: 100px;
  }
  .a_content__text {
    font-weight: bold;
    letter-spacing: 0.5px;
    font-size: 18px;
    min-width: 220px;
    max-width: 600px;
    color: inherit;
  }
  .a__left{
    margin-left: 24px;
  }
  .a__right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .a_additional{
    display: flex;
    justify-content: center;
  }
  .a_button{
    letter-spacing: 1px;
    margin-left: 100px;
    font-size: 24px;
    font-weight: bold;
    padding: 10px 8px;
    text-align: center;
    width: 180px;
    height: 25px;
    border-radius: 12px;
    border: 3px solid #514271;
    margin-right: 10px;
    color: #514271;
  }
  .a_button:hover{
    cursor: pointer;
    background-color: #514271;
    color: white;
  }
  .partners {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

  }

  .partners__img {
    display: block;
    height: 100px;
  }
  .contacts{
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    margin: 12px 8px;
  }
  .contacts_mobile{
    flex-direction: column;
    justify-content: center;
  }
  .contacts__left{
    width: 50%;
    margin: 0 16px;
  }
  .contacts__left_mobile{
    width: calc(100% - 32px);
    margin: 0;
  }
  .contacts__right{
    width: 40%;
    height: 30vw;
  }
  .contacts__right_mobile {
    width: 90%;
    height: 90vw;
  }

  .contacts__list{
    list-style-type: none;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
  .contacts__item{
    color: #514271;
    font-size: 20px;
    text-align: left;
    padding: 16px 24px;
    border-bottom: 1px solid #514271;
  }
  .contacts__item:last-child{
    border-bottom: none;
  }
  .yandex__map{
    width: 100%;
    height: 100%;
  }
  .about {
    display: flex;
    justify-content: flex-start;
    flex-flow: column wrap;
    background-color: #514271;
    margin: 12px 8px;
  }

  .about__header {
    color: white;
    padding-top: 16px;
    padding-left: 32px;
    font-size: 32px;
  }

  .about_desc {
    color: white;
    padding-top: 16px;
    padding-left: 32px;
    padding-right: 92px;
    font-size: 18px;
  }

  .advantages {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 64px;
    padding-top: 32px;
  }

  .adv__img {
    width: 650px;
    height: 100px;
  }
</style>
