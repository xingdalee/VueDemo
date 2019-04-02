import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = createRouter()

// 全局导航守卫，每次路由跳转的时候都会触发这个些钩子

// 应用场景(非常重要)：比如没有登录的用户不能看某些页面，权限设置

// 执行顺序:beforeEach -> beforeResolve -> afterEach
router.beforeEach((to, from, next) => {
  console.log('bofore each invoked')
  // 只有路由是login时才会登录
  if (to.fullPath === '/app1') {
    // 执行next()之后路由才会真正的跳转
    next('/login') // 这里执行跳转参数，不传就默认跳转指定的路由
    // 深入使用方式
    // next({
    //   path: '/login',
    //   // name: '/login',
    //   replace: true // 点击返回时，返回的历史记录的问题（不返回之前的页面。待测试）
    // })
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  console.log('bofore Resolve invoked')
  // 执行next()之后路由才会真正的跳转
  next()
})

router.afterEach((to, from) => {
  console.log('bofore afterEach invoked')
})
new Vue({
  router, // 注入
  render: h => h(App)
}).$mount('#app')
