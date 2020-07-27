<template>
  <div class="blog-container">
    <div class="left-side">
      <h1>Blog</h1>
      <BlogPost v-for="post in posts" :key="post.id" :blog="post" />
    </div>

    <div class="right-side">
      <router-view :blogs="posts" />
    </div>
  </div>
</template>

<script>
  import BlogPost from '@/components/BlogPost.vue';
  import PostService from '@/services/PostService';
  import { mapState } from 'vuex'

  export default {
    components: {
      BlogPost
    },
    computed: {
      ...mapState(['posts']),
    },
    created(){
      this.$store.dispatch('fetchPosts')
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