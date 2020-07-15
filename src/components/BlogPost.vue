<template>
  <div>
    <router-link :to="`/blog/${blog.id}`">
      <h2>{{blog.title}}</h2>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      blog: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
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