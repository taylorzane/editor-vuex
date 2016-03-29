import Vue from 'vue'
import store from './vuex/store'
import App from './App'

Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
})
