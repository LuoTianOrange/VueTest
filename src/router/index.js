import Vue from 'vue'
import VueRouter from 'vue-router'
// import MyProduct from '@/components/MyProduct.vue'
import ProductViewVue from '@/views/ProductView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ProductViewVue
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
