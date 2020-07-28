<template>
  <div>
    <h1>Editing "{{blogPost.title}}"</h1>

    <PostForm :editablePost="editablePost"
              :savePost="updatePost"
              :cancel="cancel"
              submitText="Update Post" />

    <hr />
    <button @click="remove">Delete</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import PostForm from '@/components/PostForm.vue';

  export default {
    props: ['id'],
    components: {
      PostForm
    },
    computed: {
      ...mapGetters(['findPost']),
      blogPost(){
        return this.findPost(this.id) || {}
      },
      editablePost(){
        return {...this.blogPost}
      }
    },
    methods: {
      async updatePost() {
        let updatedPost = await this.$store.dispatch('updatePost', this.editablePost)
        this.$router.push(`/blog/${updatedPost.id}`)
      },
      cancel(){
        this.$router.push(`/blog/${this.blogPost.id}`)
      },
      async remove(){
        await this.$store.dispatch('removePost', this.blogPost)
        this.$router.push(`/blog`)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>