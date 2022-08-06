<template lang="">
   <nav>
       <div class="logo">logo</div>
        <button  class="login" @click="out()">登出</button>
        <!-- <button v-else class="login" @click="login()">登录</button>  -->
       <ul>
           <li>
                <router-link to="/Home.vue">首页</router-link>
             <router-link to="/ShowBlog.vue">看博客</router-link>
             <router-link to="/AddBlog.vue">写博客</router-link>
            
             <router-link to="/Comment.vue">留言板</router-link>
             <router-link to="/Search.vue">查找</router-link>
             <router-link to="/Ask.vue">咨询</router-link>
             <!-- <el-button>Default -->

             <!-- </el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button> -->
            
            
           </li>
       </ul>
      
   </nav>
</template>
<script>
export default {

    
    methods:{
        
        out() {
            localStorage.removeItem('token1');
            
            
            this.$router.push('/Login.vue')
        }
    }
    
}
</script>
<style lang="" scoped>
ul{
    
    list-style-type:none;
    text-align:center;
    margin:0;
}

li{
    display:inline-block;
    margin:0 auto;
}

a{
    color:white;
    text-decoration:none;
    padding:12px;
    border-radius:5px;
}

nav{
    background:grey;
    padding:15px 0;
    margin-bottom:40px;
}

.logo {
    position:absolute;
    left:100px;

}


.login {
    position:absolute;
    right:50px;
}

.router-link-active{
    background:rgba(255,255,255,0.8);
    color:#444;
}
    
</style>