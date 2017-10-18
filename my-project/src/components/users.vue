<template>
  <div class="container" >

    <h1>
        <i class="fa fa-users" ></i>users work!
    </h1>
    <table class="table table-striped">
        <thead>
            <th>ID</th>
            <th>姓名</th>
            <th>邮箱</th>
            <th>电话</th>
            <th>收支</th>
            <th></th>
        </thead>
        <tbody>
            <tr v-for="item in usersInfo" :key="item.id" >
                <td>{{item.id}} </td>
                <td>{{item.name}} </td>
                <td>{{item.email}} </td>
                <td>{{item.phone}} </td>
                <td>{{item.balance}} </td>
                <td>
                    <router-link  :to="'/h/user-detall/'+item.id"  class="btn btn-secondary ">
                        <i class="fa fa-arrow-circle-o-right"></i> 详情
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
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
        name: 'Users',
        created () {
            this.getGoods();
        },
        data () {
            return {
                usersInfo: [] 
            }
        },
        methods: {
            getGoods() {
                this.$axios.get(`http://localhost:3000/users`)
                    .then(res => {
                        this.usersInfo=res.data;
                    })
            }
        }
        
    }
</script>
<style scoped>

</style>
