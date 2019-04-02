<template>
  <div class="hello">
    1、computed 计算属性
   姓: <input v-model="firstName" />
   名: <input v-model="lastName" />
   <div>传统方法:{{firstName}}{{lastName}}</div>
   <div>{{fullName}}</div>
   <hr />
   2、watch侦听属性
  当firstName或者lastName数据变化时，count+1 -> {{count}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      count: 0
    }
  },
  computed: {
    // 计算属性只有在依赖的属性firstName或者lastName改变的时候才会触发计算属性。在别的地方调用的时候是调用的上一次的结果缓存
    fullName: function () {
      return `计算属性:${this.firstName + this.lastName}`
    }
  },
  // 监听某一个属性的变化，一旦变化触发方法
  watch: {
    firstName: function() {
      this.count ++
    },
    lastName: function() {
      this.count ++
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
