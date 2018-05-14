import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Goods from '@/pages/goods/goods'
import Raging from '@/pages/raging/raging'
import Seller from '@/pages/seller/seller'

Vue.use(Router)

export default new Router({
  mode: 'history',//hash
  routes: [
    {
      path: '/',
      redirect: '/goods',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/goods',
          name: 'Goods',
          component: Goods
        },
        {
          path: '/raging',
          name: 'Raging',
          component: Raging
        },
        {
          path: '/seller',
          name: 'Seller',
          component: Seller
        }
      ]
    }
  ]
})
