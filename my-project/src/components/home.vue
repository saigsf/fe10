<template>
  <div>
      <div class="container">
      <nav class="navbar navbar-default">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Brand</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li >
                  <router-link to="/h">首页</router-link>
                </li>
                
                <li><router-link to="/h/users">用户</router-link></li>
                
              </ul>
              
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <router-link to="/h/login">登录</router-link>
                </li>
                <li class="dropdown">
                  <router-link to="/h/register">注册</router-link>
                </li>
              </ul>
              <form class="navbar-form navbar-right">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search" @keyup="search()" >
                </div>
                <button type="button" class="btn btn-default" >Search</button>
              </form>
              
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
      </div>
      <router-view></router-view>
      <!-- <h1>home work!</h1>
      <h2>{{msg}} </h2> -->
      
  </div>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App, this is Home.'
            }
        },
        created () {
            this.hello()
            this.search()
        },
        methods:{
            hello: function () {
                console.log('hello from mixin!')
            },
            search:function(){
                    this.$axios.get('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
                        params:{
                            wd:"王者荣耀"
                        },
                        jsonp:"cb"
                    }).then(res => {
                        console.log(res)
                    })
                },
        }
    }
</script>
<style scoped>

</style>
