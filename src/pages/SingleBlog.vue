<template lang="">
    <div id="single-blog">
        <h1>标题：{{blog.title}}</h1>
       
        <div class="content1">{{blog.content}}</div>
        
        
        <div class="info">
        <ul>
            <li v-for="category in blog.checkedCategories">
            分类：{{category}}
            </li>
        </ul>
       
        <p>昵称:{{blog.authors}}</p>
        <p>作者:{{blog.author}}</p>
        
         <el-button type="primary" @click="deleteSingleBlog()">删除</el-button>
        <!-- <button @click="deleteSingleBlog()">删除</button> -->
        <!-- <router-link :to="'/edit/'+id">编辑</router-link> -->
         <el-button type="success" ><router-link :to="'/edit/'+id" class="router1">编辑</router-link></el-button>
        
         </div>
      
    </div>
</template>
<script>
export default {
    name:'SingleBlog',
    data() {
        return {
            id:this.$route.params.id,
            blog:{},

        }
    },
    mounted() {
      var _this = this;
      this.$http.get("https://blogproject-73495-default-rtdb.firebaseio.com/posts/"+_this.id+".json").then(function(data1) {
                  _this.blog = data1.data;             
               })
    
                     
  },
  methods:{
      
      deleteSingleBlog() {
          var _this = this;
          this.$http.delete("https://blogproject-73495-default-rtdb.firebaseio.com/posts/"+_this.id+".json").then(response => {
              this.$router.push({path:'/ShowBlog.vue'});
          })},
      editBlog(){
          this.$router.push("'/edit/'+id")

 }          
        

    
 
//     deleteSingleBlog() {
//         console.log("11");
//     }
//   }
  }
}
</script>
<style lang="">
#single-blog{
    max-width:960px;
    margin:0 auto;
    padding:20px;
    background:#eee;
    border:1px dotted #aaa;
}

ul{
    
    list-style-type:none;
    text-align:center;
    margin:0;
}

.info{
    padding:20px;
    margin:20px 10px;
    box-sizing:border-box;
    background:#009FCC;
    border:1px dotted #aaa;

}

.content1{
    padding:20px;
    margin:20px 10px;
    box-sizing:border-box;
    background:skyblue;
    border:1px dotted #aaa;
}

.router1{
    text-decoration:none;
}


    
</style>