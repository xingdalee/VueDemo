<template>
  <!-- 什么时候需要拆分组件呢？当一个功能非常的复杂和强大时，需要解耦和复用 -->
  <div class="hello">
    <input v-model="inputValue">
    <button @click="handleSubmit">提交</button>
    <div>
      <!-- <button @click="destroyHello">销毁组件时</button> -->
    </div>
    <ul>
      <!--  @deleteItem='handleDelete'的意思是说 父组件监听子组件是否触发deleteItem事件 -->
      <todoItem v-for="(item, index) in list" :key="index" :content="item" :index="index" @deleteItem='handleDelete'></todoItem>
    </ul>
  </div>
</template>

<script>
  import todoItem from './todo-item.vue'
  export default {
    name: 'HelloWorld',
    components: {
      todoItem
    },
    props: {
      msg: String
    },
    data() {
      return {
        inputValue: '',
        list: []
      }
    },
    methods: {
      handleSubmit() {
        if (!this.inputValue) {
          return
        }
        this.list.push(this.inputValue)
        this.inputValue = ""
      },
      handleDelete(index) {
        this.list.splice(index, 1)
      },
      destroyHello() {
        this.$destroy()
      }
    },
    // 生命周期
    beforeCreate() {
      console.log(this, 'beforeCreate')
    },
    // （在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，
    // watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
    created() {
      console.log(this, 'created')
    },
    beforeMount() {
      console.log(this, 'beforeMount')
    },
    // 只有在成功挂载实例的时候才会执行
    mounted() {
      console.log(this, 'mounted')
    },
    // beforeUpdate和updated只有在数据更新的时候才会执行 如：输入数据
    beforeUpdate() {
      console.log(this, 'beforeUpdate')
    },
    updated() {
      console.log(this, 'updated')
    },
    // activated,deactivated这两个生命周期函数一定是要在使用了keep-alive组件后才会有的，否则则不存在
    // 使用场景如动态路由，需要根据接收的不同参数来获取不同的数据的时候
    activated() {
      console.log(this, 'activated')
    },
    deactivated() {
      console.log(this, 'deactivated')
    },
    // 销毁组件时才会触发
    beforeDestroy() {
      console.log(this, 'beforeDestroy')
    },
    destroyed() {
      console.log(this, 'destroyed')
    }
  }
</script>

<style scoped>
  .hello {
    text-align: left
  }
</style>
