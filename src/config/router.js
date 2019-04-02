import Router from 'vue-router'
import routes from './routes'
export default () => {
    return new Router({
        routes,
        mode: 'history', // 去掉url中的hash路由（#号）
        // base: '/base/' // base不是一个强制参数，只要是用vue-routerAPI跳转的url，都会在url上加个base的前缀
        // linkActiveClass: 'active-link', // 设置router-link点击激活的时的全局样式,参数可改
        // linkExactActiveClass: 'exact-active-link', // 设置router-link的时的全局样式
        // scrollBehavior页面跳转的时候，页面是否滚动（如果之前打开过页面，再次打开就滚动到该位置）
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                // 滚动到最上面和最左边
                return {
                    x: 0,
                    y: 0
                }
            }
        },
        // parseQuery (query) {
        //   // query是字符串，可以根据自己的需求把url中的参数封装成obj
        // },
        // stringifyQuery (obj) {
        //   // parseQuery的功能相反,把obj转字符串
        // }
        fallback: true // 对不支持单页面应用的浏览器进行路由hash的修复，false后就不是单页面应用了
    })
}