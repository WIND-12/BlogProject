<template>
  <!-- <AddBlog></AddBlog> -->

  <blog-header></blog-header>
  
   <router-view></router-view>
  
  <!-- <ShowBlog></ShowBlog> -->
  
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlog from './components/ShowBlog.vue'
import BlogHeader from './components/BlogHeader.vue'
import SingleBlog from './components/SingleBlog.vue'

export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlog,
    BlogHeader,
    SingleBlog
  }
}
</script>
