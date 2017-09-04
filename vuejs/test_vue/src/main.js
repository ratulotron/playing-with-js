import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import Vuex from 'vuex';

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App.vue';
import store from './store'

Vue.use(VueOnsen);
Vue.use(Vuex);

new Vue({
  el: '#app',
  store: store,
  template:'<app></app>',
  components: { App }
});

