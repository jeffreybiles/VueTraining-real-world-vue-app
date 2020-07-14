<template>
  <div class="blog-container">
    <h1>Blog</h1>
    
    <div v-for="blog in blogs" :key="blog.id">
      <router-link :to="`/blog/${blog.id}`">
        <h2>{{blog.title}}</h2>
      </router-link>
      <p class="blog-text">{{blog.text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
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
}
  .blog-text {
    text-align: left;
  }

  a {
    text-decoration: none;

    h2 {
      color: #008;
    }
  }
</style>