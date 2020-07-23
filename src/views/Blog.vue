<template>
  <div class="blog-container">
    <div class="left-side">
      <h1>Blog</h1>
      <BlogPost v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>

    <div class="right-side">
      <router-view :blogs="blogs" />
    </div>
  </div>
</template>

<script>
  import BlogPost from '@/components/BlogPost.vue';
  import axios from 'axios'
  export default {
    components: {
      BlogPost
    },
    data(){
      return {
        blogs: []
      }
    },
    async created(){
      let response = await axios.get('http://localhost:3000/posts')
      this.blogs = response.data
    }
  }
</script>

<style lang="scss" scoped>
.blog-container {
  max-width: 800px;
  margin: auto;

  display: flex;

  .left-side {
    flex: 1;
  }

  .right-side {
    flex: 3;
  }
}
</style>