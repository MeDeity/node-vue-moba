import Vue from 'vue'
import App from './App.vue'
import './scss/style.scss'
import router from './router'
//vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'// import style

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
