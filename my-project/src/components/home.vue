<template>
  <div>
      <h1>home work!</h1>
      
  </div>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created () {
            this.hello()
        },
        methods:{
            hello: function () {
                console.log('hello from mixin!')
            }
        }
    }
</script>
<style scoped>

</style>
