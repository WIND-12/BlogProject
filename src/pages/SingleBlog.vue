<template lang="">
    <div id="single-blog">
        <h1>标题：{{blog.title}}</h1>
        <article>正文：{{blog.content}}</article>
        <ul>
            <li v-for="category in blog.checkedCategories">
            {{category}}
            </li>
        </ul>
        <p>昵称:{{blog.authors}}</p>
        <p>作者:{{blog.author}}</p>
        <button @click="deleteSingleBlog()">删除</button>
        <router-link :to="'/edit/'+id">编辑</router-link>
      
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
          })}
        

    
 
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
    
</style>