<template>
  <div>
    <h1>Editing "{{blogPost.title}}"</h1>

    <form @submit.prevent="updatePost">
      <div class="input-field">
        Title: <textarea v-model="editablePost.title" rows="2" />
      </div>
      <div class="input-field">
        Text: <textarea v-model="editablePost.text" rows="5" />
      </div>
      <input type="submit" value="Update Post" />
    </form>
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
      },
      editablePost(){
        return {...this.blogPost}
      }
    },
    methods: {
      updatePost() {
      async updatePost() {
        let updatedPost = await this.$store.dispatch('updatePost', this.editablePost)
        this.$router.push(`/blog/${updatedPost.id}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input-field {
    display: flex;
    justify-content: center;
    align-items: center;

    textarea {
      width: 300px;
      margin: 10px;
    }
  }
</style>