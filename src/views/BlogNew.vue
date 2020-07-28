<template>
  <div>
    <PostForm :editablePost="newPost"
              :savePost="createPost"
              :cancel="cancel"
              submitText="Create Post" />
  </div>
</template>

<script>
  import PostForm from '@/components/PostForm.vue';
  export default {
    components: {
      PostForm
    },
    data(){
      return {
        newPost: {}
      }
    },
    methods: {
      async createPost(){
        let newPost = await this.$store.dispatch('createPost', this.newPost)
        this.$router.push(`/blog/${newPost.id}`)
      },
      cancel(){
        this.newPost = {}
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>