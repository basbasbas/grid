import Vue from 'vue'
import App from './App'
import DnD from 'vue-dnd'

//import $ from 'jquery'
//const jQuery = $
//require('../semantic/dist/semantic.min.js')

Vue.use(DnD)


// Global directives
Vue.directive('dropdown', function () {
  //console.log($(this.el))
  $(this.el).dropdown()
})


/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
