<template lang="">
   <nav>
       <ul>
           <li>
             <router-link to="/ShowBlog.vue">看博客</router-link>
             <router-link to="/AddBlog.vue">写博客</router-link>
            
            
           </li>
       </ul>
   </nav>
</template>
<script>
export default {
    
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
    margin:0 10px;
}

a{
    color:white;
    text-decoration:none;
    padding:12px;
    border-radius:5px;
}

nav{
    background:crimson;
    padding:30px 0;
    margin-bottom:40px;
}

.router-link-active{
    background:rgba(255,255,255,0.8);
    color:#444;
}
    
</style>