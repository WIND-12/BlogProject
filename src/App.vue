<template>
  <!-- <AddBlog></AddBlog> -->

  <blog-header v-show="!((this.$route.path === '/Login.vue') || (this.$route.path === '/Register.vue')) "></blog-header>
  
   <router-view></router-view>
  
  <!-- <ShowBlog></ShowBlog> -->
  
</template>

<script>

import AddBlog from './pages/AddBlog.vue'
import ShowBlog from './pages/ShowBlog.vue'
import BlogHeader from './pages/BlogHeader.vue'
import SingleBlog from './pages/SingleBlog.vue'

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
