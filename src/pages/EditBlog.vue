<template>

  <div id="add-blog">
      
      <form v-if="!submmited">
      <h2>创建一篇新博客吧！</h2>
          <label style="color:red;font-weight:bold">博客标题</label>
          <input type="text" v-model="blog.title" placeholder="取一个简短的标题有利于吸引人气哦！" style="text-align:center">
          <label style="color:red;font-weight:bold" >博客内容</label>
          <textarea v-model="blog.content" placeholder="分享你的所见所闻吧！"  maxLength="20000"></textarea>
          <div id="checkboxes">
              <br>
              <label style="color:red;font-weight:bold">博客类别：（最多选择两项）</label>

              <el-checkbox-group v-model="blog.checkedCategories" :min="0" :max="2">
             <el-checkbox v-for="i in categories1" :key="i" :label="i">{{i}}
             </el-checkbox>
             </el-checkbox-group>
           
          </div>
          <label style="color:red;font-weight:bold">选择昵称：</label>
          <select v-model="blog.authors">
              <option v-for="i in authors">{{i}}</option>
          </select>

          <button v-on:click.prevent="add">确定编辑</button>
      </form>

      <div v-if="submmited">
      <h3>您的博客已经发布成功！</h3>
      </div>

     
      <!-- <div id="preview">
          <h3>博客预览</h3>
          <p>博客标题：{{blog.title}}</p>
          <p>博客内容：</p>
          <p>{{blog.content}}</p>
          <p>博客分类：</p>
          <ul>
              <li v-for="i in blog.checkedCategories">{{i}}</li>
          </ul>
          <p>作者：{{blog.author}}</p>

      </div> -->
  </div>
  
</template>

<script>
import { ref } from 'vue'






export default {
  name: 'EditBlog',
  data() {
      return {
          id:this.$route.params.id,
          blog: {
              title:"",
              content:"",
              
              authors:[],
              index:0,
              checkedCategories: ref(),
              author:this.$store.state.author,
              
          },
          authors:["苹果","橘子","西红柿"],
          submmited:false,
          isDisabled:false,
          categories1: ['日常生活', '学习经验', '体育运动', '情感生活'],

      }
  },
  mounted() {
          this.fetchData();
      },


  
  methods: {
    

  add: async function() {
    //   console.log(this.blog.author)
    //   console.log(this.$store.state)
      if(this.$store.state.author === this.blog.author) {
          
          var _this = this;
          const {data:res} = await this.$http.put("https://blogproject-73495-default-rtdb.firebaseio.com/posts/"+_this.id+".json",this.blog)
               console.log(111111)
               console.log(res)
               this.submmited = true;

      }
      else {
          alert("您没有权限编辑他人的博客！")
      }
      },
      

      fetchData() {
        //   console.log(this.id);
        console.log("test");
        console.log(111111)
        
        var _this = this;
        this.$http.get("https://blogproject-73495-default-rtdb.firebaseio.com/posts/"+_this.id+".json").then(response => {
              _this.blog = response.data;
          })
          console.log(_this.blog)

      }}
//   watch: {
//       blog: {
//           handler(new1,old1) {
//               if(new1.catagories.length > 1) {
                  
//                   this.isDisabled = true;
//               }
//           },
//           deep:true
//       }
//   }
  
}
</script>
<style scoped>
#add-blog *{
   box-sizing: border-box;
}

#add-blog {
    margin:-50px auto;
    max-width:600px;
    padding:20px;
}

label {
    display:block;
    margin:20px 0 10px;
}

input[type="text"],textarea,select{
    display:block;
    width:100%;
    padding:8px;
}

textarea {
    height:200px;
}

#checkboxes label {
    display: inline-block;
    margin-top: 0;
}

#checkboxes input {
    display:inline-block;
    margin-right:10px;
}

button {
    display:block;
    margin:20px auto;
    background:crimson;
    color:white;
    border:0;
    padding:14px;
    border-radius:4px;
    font-size:18px;
    cursor:pointer;
}

/* #preview {
    padding:10px 20px;
    border:1px dotted #ccc;
    margin:30px 0;
} */

h3 {
    margin-top:10px;

}
</style>