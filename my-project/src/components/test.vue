<template>
  <div class="container">
    <img v-for="(item,index) in items" :key="index"  :src="getItemImg(item.images[0])" alt="">
    
  
  </div>
</template>

<script>
export default {

    name: 'Test',
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
            items:[]
        }
    },
    methods: {
        getData(){
            this.$axios.get('/api/news/latest')
                .then(res => {
                    console.log(res)
                    // http://image.weserv.nl/?url=imgurl
                    this.items=res.data.stories
                })

        },
        getItemImg(url){
            console.log(url)
            if(url !== undefined){
                    return url.replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
                }
        }

    }
}
</script>

<style>


</style>