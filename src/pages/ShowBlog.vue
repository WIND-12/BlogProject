<template lang="">
    <!-- <div v-theme="'narrow'" id="show-blogs"> -->
    <div id="show-blogs">
     
        <div class="content">

        <input type="text" v-model="search" placeholder="搜索">
        <div v-for="i in filteredBlogs" class="single-blog">
        <router-link :to="'/blog/' + i.index">
        <h2 v-changeColor>{{i.title.toUpperCase()}}</h2>
        </router-link>
        <article>
            {{i.content}}
        </article>
        </div>
        </div>
       
    <!-- <div class="right">
        <div class="rightTitle">热门标题</div>
    </div> -->
       
    </div>
</template>
<script>


export default {
  name: 'ShowBlog',
  data() {
      return {
          blogs:[],
          search:""

      }
  },
  methdods: {
      

  },
  created() {
      var _this = this;
      this.$http.get("https://blogproject-73495-default-rtdb.firebaseio.com/posts.json").then(function(data1) {
                            
                for(let key in data1.data) {
                    //给每个元素赋予一个id，firebase自动生成的索引号
                    data1.data[key].index = key
                    _this.blogs.push(data1.data[key]);                  
                }
                
                   
                   
               })
                     
  },
  computed:{
      filteredBlogs:function() {
          console.log("1");
          console.log(this.blogs);
          console.log("2");
          return this.blogs.filter((blog)=> {

              return blog.title.match(this.search);
          })
      }
  }
  
 
  
}
</script>
<style lang="">
#show-blogs{
    width:80%;
    margin:0 auto;
    
    background:skyblue;
}


.single-blog{
    padding:20px;
    margin:20px 10px;
    box-sizing:border-box;
    background:#eee;
    border:1px dotted #aaa;
}

#show-blogs a{
    color:#444;
    text-decoration:none;


}

input[type="text"]{
    padding:8px;
    width:100%;
    box-sizing:border-box;
}



/* .right{
    
    width:20%;
    height:600px;
    background:grey;
    position:fixed;
    left:80%;
 
    
} */

.rightTitle{
    background:grey;
    
}

.content {
    float:left;
    background:skyblue;
    width: 80%;
  
    
    
}
</style>