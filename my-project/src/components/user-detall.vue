<template>
  <div id="app">
    
    <div class="container">
        <router-view />
        <h1>id: {{userInfo.id}} </h1>
        <h1>name: {{userInfo.name}}</h1>
        <h1>Email: {{userInfo.email}}</h1>
        
    </div>
    
    
  </div>
</template>

<script>
let data =[{
        id:1,
        name:"gsf",
        sex:"man"
    },{
        id:2,
        name:"lc",
        sex:"man"
    },{
        id:3,
        name:"qy",
        sex:"man"
    }];
export default {

    name: 'UserDetall',
    created () {
        this.getData();
    },
    watch: {
        $route(){
            this.getData();
        }
    },
    data () {
        return {
            userInfo:{}
        }
    },
    methods: {
        getData(){
            this.$axios.get(`http://localhost:3000/users/${this.$route.params.id}`)
                .then(res => {
                    this.userInfo=res.data;
                    })

        }
    }
}
</script>

<style>


</style>