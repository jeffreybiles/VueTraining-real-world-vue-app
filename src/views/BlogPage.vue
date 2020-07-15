<template>
  <div>
    <h1>{{blogPost.title}}</h1>
    <p>{{blogPost.text}}</p>
  </div>
</template>

<script>
  export default {
    props: ['id', 'blogs'],
    computed: {
      blogPost(){
        return this.blogs.find(b => b.id == this.id)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>