import type { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../views/HomePageView.vue')
    },
    {
      path: '/score',
      name: 'Score',
      component: () => import('../views/ScoreView.vue')
    },

    //À voir si je garde ou nn
    {
      // Route 404
      // Dans l'exemple ci-dessous, le paramètre dynamique pathMatch est égal à la partie de l'url qui suit le caractère /. Par exemple, si l'url est /foo, alors le paramètre pathMatch sera égal à foo. L'expression régulière (.*)* qui suit le paramètre dynamique correspond à n'importe quel caractère. Donc, '/:pathMatch(.*)*' correspond à n'importe quel chemin de l'URL. C'est la façon dont on définit une route 404 dans Vue.js.
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
  
  export default routes