import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Demo01 from '@/components/Demo01'
// import Demo02 from '@/components/Demo02'
// import Demo03 from '@/components/Demo03'
// import List from '@/components/list'
// import Detail from '@/components/detail'
import Login from '@/components/login'
import Index from '@/components/index'
import Charts from '@/components/charts'
import ProductList from '@/components/productList'
import UserList from '@/components/userList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {path:'/login',component:Login},
    {
      path:'/index',
      component:Index,
      children:[
        {path:'/',component:Charts},
        {path:'/charts',component:Charts},
        {path:'/userList',component:UserList},
        {path:'/productList',component:ProductList}
      ]
    }

  ]
})
