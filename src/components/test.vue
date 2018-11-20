<template>
    <div>
        <button @click="goBack">返回</button>
    </div>
</template>

<script>
    export default {
        name:'test',
        methods:{
            goBack(){
                this.$router.push({
                    path:'/'
                })
            }
        }
    }
</script>

<style scoped>

</style>