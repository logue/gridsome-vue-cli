import Vue from 'vue';
import { VueConstructor } from 'vue/types/umd';
import App from './App.vue';
import router from './router';
// import store from './store';

Vue.config.productionTip = false;

// For Vue Cli
new Vue({
  router,
  //  store,
  render: h => h(App),
}).$mount('#app');

// For Gridsome
export default function (vue: VueConstructor) {
  // Set default layout as a global component
  vue.component('Layout', App);
}
