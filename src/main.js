// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// Import Internationalization


Vue.config.productionTip = false


// Definition of the theme colors
const colors = {
  primary: '#0097c1' /* indigo */,
  secondary: '#003b70' /* bleu  */,
  accent: '#003b70' /* deep orange */,
  error: '#F44336' /* rouge */,
  info: '#00BCD4' /* cyan */,
  success: '#4CAF50' /* vert */,
  warning: '#FF9800' /* orange */,
};


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
