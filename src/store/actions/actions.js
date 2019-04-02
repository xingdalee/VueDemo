// action
export default {
  // store是整个vuex的store对象，这里也只能传入两个参数,data传入一个字符串的时候可以，多个值得时候要把data封装成对象
  // 多个参数参考mutations.js中的示例

  // 为什么有了mutations还要有action的存在
  // 因为mutations必须是同步操作的，不能有异步的代码，而action是为了解决异步操作的
  // 异步代码都要放入action中处理
  // Action 提交的是 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作。
  updateCountAsync(store, data) {
    setTimeout(() => {
      store.commit('updateActionCount', {
        num: data.num
      })
    }, data.time)
  }
}
