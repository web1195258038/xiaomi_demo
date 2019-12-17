<template>
<div>
    <h1>545</h1>
</div>
    
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        
    },
    mounted () {
        this.$axios.get("https://shiyaming1994.github.io/mi/static/rotationChart.json",{

        })
        .then(res=>{
            console.log(res)
        })
    }
}
</script>
<style scoped>

</style>
