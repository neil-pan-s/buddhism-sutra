import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes:[
    { path: '/:sutra', component: () => import('./Sutra.vue') },
    { path: '/', component: () => import('./Sutra.vue') },
  ]
})

export default router