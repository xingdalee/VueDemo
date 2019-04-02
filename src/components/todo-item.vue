<template>
    <div class="todoItem">
        <li>{{content}}</li>
    </div>
</template>

<script>
    export default {
        name: 'todoItem',
        props: {
            content: {
                default: '',
                required: true
            }
        },
        data() {
            return {
               
            }
        },
        methods: {
        }
    }
</script>
<style scoped>

</style>
