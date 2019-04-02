<template>
    <div class="login">
        <b>我是登录页面，欢迎您！！</b>
        <button @click="back">返回</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            back() {
                this.$router.push({
                    name: 'helloWorld'
                })
            }
        },
        mounted() {
            console.log('id是:', this.$route.query.id)
        },
    }
</script>

<style scoped>
    .login {
        text-align: left
    }
</style>
