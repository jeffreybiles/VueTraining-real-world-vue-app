<template>
  <div>
    <h1>Editing "{{blogPost.title}}"</h1>
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