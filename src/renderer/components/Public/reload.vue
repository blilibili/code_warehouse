<template>
    <div>我是reload钩子</div>
</template>
<script>
    export default {
        data() {
            return {
                preRouter:''
            }
        },
        components: {},
        methods: {},
        mounted(){
            let path = localStorage.getItem('history');
            console.log(path);
            this.$router.replace(path);
        }
    }
</script>