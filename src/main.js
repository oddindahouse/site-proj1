import Vue from 'vue';
import VueMq from 'vue-mq';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faHiking,
  faSearch,
  faHandshake,
  faCoins,
  faClipboardList,
  faShippingFast,
  faProjectDiagram,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import YmapPlugin from 'vue-yandex-maps';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faBars,
  faHiking,
  faSearch,
  faHandshake,
  faCoins,
  faClipboardList,
  faShippingFast,
  faProjectDiagram,
  faAngleDown,
  faAngleUp,
);

Vue.use(YmapPlugin, {
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
});
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueMq, {
  breakpoints: {
    mobile: 750,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
