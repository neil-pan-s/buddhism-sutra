import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// eslint-disable-next-line no-undef
console.info(`Buddhism-Sutra [${WALLE_BOT_TIMESTAMP}] Works ...`)

export default app 
