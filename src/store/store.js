// 所有store的入口
import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
// 初始化store
// export default store
const isDev = process.env.NODE_ENV === 'development'
// 为了适应服务端渲染，采用function的方法
export default () => {
  const storeHot = new Vuex.Store({
    // strict为true时禁止直接通过this.$store.state.count = 2这样的方式给state赋值
    // 这么做是因为vuex官方推荐，也是为了规范，改state只能通过mutations来操作(例如this.$store.commit('updateCount', i++))
    // 生产环境需要设置为false
    strict: isDev, // 规范，在开发环境限制直接更改state
    state: defaultState,
    mutations: mutations,
    getters: getters,
    actions: actions,
    // 模块下还可以在增加模块，是无限延伸的
    modules: {}
  })
  // webpack热更替的普遍代码，目的是防止每次更新store时页面会闪烁刷新
  // 官方api的支持
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ], () => { // 开启热更新
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default
      storeHot.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return storeHot
}
