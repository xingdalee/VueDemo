<template>
    <div class="todoItem">
        <li @click="handleClickDel">{{content}},下标{{index}}</li>
    </div>
</template>

<script>
    export default {
        name: 'todoItem',
        props: {
            content: {
                default: '',
                required: true
            },
            index: {
                default: '',
                required: true
            }
        },
        data() {
            return {}
        },
        methods: {
            // 子组件中通过emit调用父组件的方法,发布事件
            handleClickDel() {
                this.$emit('deleteItem', this.index)
            }
        }
    }
</script>
<style scoped>

</style>
