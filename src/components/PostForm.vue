<template>
  <form @submit.prevent="savePost">
    <div class="input-field">
      Title: <textarea v-model="editablePost.title" rows="2" />
    </div>
    <div class="input-field">
      Text: <textarea v-model="editablePost.text" rows="5" />
    </div>
    <button @click.prevent="cancel">Cancel</button>
    <input type="submit" :value="submitText" />
  </form>
</template>

<script>
  export default {
    props: {
      editablePost: {
        type: Object,
        required: true
      },
      savePost: {
        type: Function,
        required: true
      },
      cancel: {
        type: Function,
        required: true
      },
      submitText: {
        type: String,
        default: "Submit Post"
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