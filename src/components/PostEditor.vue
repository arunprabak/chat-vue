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
      required: true,
      type: String
    }
  },
  data() {
    return {
      text: ""
    };
  },

  methods: {
    save() {
      const postId =
        "greatPost" +
        Math.random()
          .toString()
          .replace(".", "");
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: "7uVPJS9GHoftN58Z2MXCYDqmNAh2",
        ".key": postId
      };

      this.$emit("save", { post });
      this.text = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>