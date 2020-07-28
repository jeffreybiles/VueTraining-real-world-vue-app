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
      createPost(){
        console.log(this.newPost)
      },
      cancel(){
        this.newPost = {}
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>