<template>
  <div class="hello">
    1、v-if和v-show的使用和区别
    <!-- 频繁的使用时用show -->
    <!-- 删除节点 -->
    <div v-if="show">v-if hello world</div>
    <!-- 隐藏节点 -->
    <div v-show="show">v-show hello world</div>
    <button @click="handleClick">测试显示或隐藏</button>
    <hr /> 2、v-for的使用，必须使用key，并且不能相同，提升渲染速度
    <!-- 普通写法 -->
    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
    <!-- 数据中有对象的遍历 -->
    <!-- <ul>
      <li v-for="(item, index) in objList" :key="item.index">{{index + '、' + item.name + item.id}}</li>
    </ul> -->
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
        show: true,
        list: [1, 2, 3, 4, 5, 6],
        objList: [{
            id: '001',
            name: 'xixi'
          },
          {
            id: '002',
            name: 'haha'
          },
          {
            id: '003',
            name: 'keke'
          }
        ]
      }
    },
    methods: {
      handleClick() {
        this.show = !this.show
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    text-align: left
  }
</style>
