import Vue from 'vue'
import App from './App'
import DnD from 'vue-dnd'

Vue.use(DnD)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
