<template>
  <!-- 什么时候需要拆分组件呢？当一个功能非常的复杂和强大时，需要解耦和复用 -->
  <div class="hello">
   <input v-model="inputValue">
   <button @click="handleSubmit">提交</button>
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
    }
  }
}
</script>

<style scoped>
.hello {
  text-align: left
}
</style>
