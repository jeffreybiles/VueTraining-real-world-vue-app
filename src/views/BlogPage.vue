<template>
  <div>
    <h1>{{blogPost.title}}</h1>
    <p>{{blogPost.text}}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    props: ['id'],
    computed: {
      ...mapGetters(['findPost']),
      blogPost(){
        return this.findPost(this.id) || {}
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>