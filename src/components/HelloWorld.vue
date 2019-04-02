<template>
  <div class="hello">
    <b>1、如何将数据显示在节点上</b>
    <div>{{content}}</div>
    <div v-text="content"></div>
    <div v-html="content"></div>
    <hr />
    <b>事件绑定</b>
    <div v-on:click="doThis">doThis 次数{{count}}</div>
    <div @click="doThis">第二种写法 doThis 次数{{count}}</div>
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
      count: 0,
      content: 'Hello world'
      // content: '<b style="color:red">Hello world</b>'
    }
  },
  methods: {
    doThis() {
      this.count ++
      this.content = '您点击了doThis'
    }
  }
}
</script>

<style scoped>
</style>
