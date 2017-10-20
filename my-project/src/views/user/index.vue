<template>
  <div class="container">
      <input type="button" value="+" class="btn btn-white" @click="add"  >
      <span>{{num}} </span>
      <input type="button" value="-" class="btn" @click="min">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Test',
    // data () {
    //     return {
    //         num:this.$store.state.num
    //     }
    // },
    // computed :{
    //      num(){
    //        return this.$store.state.num
    //     }
    // },
    computed:mapGetters(['num']),
    methods: {
        add(){
            // this.num+=5
            this.$store.commit('add')
        },
        min(){
            // this.num-=5
            this.$store.commit('min')
        }
    }
}
</script>

<style> 


</style>