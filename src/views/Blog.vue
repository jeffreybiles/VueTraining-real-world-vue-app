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
  export default {
    components: {
      BlogPost
    },
    data(){
      return {
        blogs: [
          {id: '1', title: 'Why Vue is Awesome', text: "It's easy to use, fast, and has lots of great tooling.  Plus, lots of companies will pay you to write it!"},
          {id: '2', title: 'Best VueJS Tips', text: "1. Use a text editor 2. It's important that your computer be turned on. 3. Serious one, ask in the Slack channel if you have any questions."},
          {id: '3', title: 'What your favorite Javascript framework says about you...', text: "Angular: You are a programmer.  React: You are a programmer.  Vue: You are a programmer, and awesome."},
        ]
      }
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