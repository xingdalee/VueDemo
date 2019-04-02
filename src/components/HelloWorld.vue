<template>
  <div class="hello">
   <input v-model="inputValue">
   <button @click="handleSubmit">提交</button>
   <ul>
     <li v-for="(item, index) in list" :key="index">{{item}}</li>
   </ul>
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
