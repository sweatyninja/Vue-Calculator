import Vue from 'vue'
import Calculator from './Calculator'

new Vue({
  el: '#app-element',
  render: function (createElement) {
    return createElement(Calculator)
  }
})

//new Vue({
//  el: '#app-element-2',
//  render: function (h) {
//    return h(App)
//  }
//})

//new Vue({
//  el: "#app-element-3",
//  render:  h => h(App)   
//})  




