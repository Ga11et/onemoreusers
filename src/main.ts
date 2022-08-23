import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UniversalUI from './components/UI/_universalUI'

Vue.config.productionTip = false

UniversalUI.forEach(component => {
  Vue.component(component.name, component)
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
