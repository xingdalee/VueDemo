<template>
  <div class="hello">
    1、属性绑定
   <!-- <div title="this is hello world">通用的html写法</div> -->
   <div title="title">不用指令时的写法，将没有任何效果</div>
   <div v-bind:title="title">绑定后显示绑定的title的数据</div>
   <div v-bind:title="'Sinder ' + title">title绑定都是表达式,可以写很多js的语法</div>
   <div :title="'Sinder ' + title">绑定的简写语法</div>
   <hr />
    2、双向绑定
    <!-- 单向绑定是数据可以决定页面的内容，但是页面不能决定数据的内容 -->
    <div>
      <input v-model="content" />
    </div>
    <div>{{content}}</div>
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
      title: 'this is hello world',
      content: '写点什么呢？'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
