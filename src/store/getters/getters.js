// 重新封装数据的一个过程
// 这里定义的方法可以在vue组件中使用了
// getters存在的意义：如某个属性是通用的，我们每次都需要处理后端返回的数据时，防止在各个组件中做重复的事情，在这里做统一的处理
export default {
  fullName (state) {
    return `${state.firstName} ${state.lastName}`
  }
}
