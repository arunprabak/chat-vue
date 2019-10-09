<template>
  <div>
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea cols="30" rows="10" class="form-input" v-model="text"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit Post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    threadId: {
      required: false,
      type: String
    },
    post: {
      type: Object
    }
  },
  data() {
    return {
      text: this.post ? this.post.text : ""
    };
  },

  methods: {
    save() {
      const post = {
        text: this.text,
        threadId: this.threadId
      };

      this.$store.dispatch("createPost", post);

      this.text = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>