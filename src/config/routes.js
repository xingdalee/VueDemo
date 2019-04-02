export default [{
        path: '/',
        redirect: '/helloWorld' // 如果是默认路由直接到app
    },
    {
        path: '/helloWorld',
        name: 'helloWorld', // 给路由命名，可以在router-link中使用对象的方式来跳转
        props: true, // 如果props为true后，参数会作为一个组件的props参数传入当前组件，不在需要通过this.$route来获取
        component: () => import('../components/HelloWorld.vue'),
        meta: {
            title: 'this is app',
            description: 'Vue里不好加meta信息，可以在这里进行SEO优化'
        },
        // 路由跳转中增加钩子函数
        beforeEnter: (to, from, next) => {
            console.log('app beforeEnter') // 执行顺序在beforeEach后立即执行
            next() // 必加的参数
        }
        // 要想显示children的页面，只能在父组件中定义<router-view />，是嵌套在父组件里面的。
        // children: [
        //   {
        //     path: 'test',
        //     component: Login
        //   }
        // ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/login.vue')
    }
]