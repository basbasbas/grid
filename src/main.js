import Vue from 'vue'
import App from './App'
import DnD from 'vue-dnd'

Vue.use(DnD)


// Global directives
Vue.directive('dropdown', function () {
  //console.log($(this.el))
  $(this.el).dropdown()
})

Vue.filter('highlightable', function (value, item) {
  if (item.temp.ui.highlighted) {
    return '<span class="highlighted">' + value + '</span>'
  }
  return value
})


/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
