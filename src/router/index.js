import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'
// import info from '../components/info'
// import infoDetail from '../components/infoDetail'
// import mainMessage from '../components/mainMessage'
// import accountInfo from '../components/accountInfo'
/* eslint-disable*/
// Vue.use(VueRouter)
Vue.use(Router)
// const routes=[
// { path: '/', components:info,name:'info'},
// {path:'/info',components:info},
// {path:'/infoDetail',components:infoDetail}
// ]
// const router = new Router({
// 	routes
// })
// export default router
export default new Router({
  routes
  // routes: [
  //   {
  //     path: '/',
  //     name: 'info',
  //     component: info
  //   },
  //   // {path:'/infoDetail',components:infoDetail},
  //   {path:'/message',component:info},
  //   {path: '/messageDetail', component: infoDetail },
  //   {path:'/userMessage',component:mainMessage,
  //     children: [
  //       {path:'',component:accountInfo},
  //       {path:'accountEnter',component:accountInfo}
  //     ]
  //   }
  // ]
})
