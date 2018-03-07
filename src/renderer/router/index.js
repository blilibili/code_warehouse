import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/code/home',
      name: 'home',
      component: require('@/components/index').default
    },
      {
        path:'/code/upload',
        name:'upload',
        component:require('@/components/Upload/add').default
      },
      {
          path: '/code/uploadIndex',
          name: 'upload-index',
          component: require('@/components/Upload/index').default
      },
      {
          path:'/code/reload',
          name:'reload',
          component:require('@/components/Public/reload').default
      },
    {
      path: '*',
      redirect: '/code/home'
    }
  ]
})
