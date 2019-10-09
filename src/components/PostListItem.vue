<template>
  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{user.name}}</a>

      <a href="#">
        <img class="avatar-large" :src="user.avatar" :alt="user.name" />
      </a>

      <p class="desktop-only text-small">{{userPostCount}} posts</p>
    </div>

    <div class="post-content">
      <div v-if="!editing">{{post.text}}</div>
      <div v-else class="full-width">
        <PostEditor :post="post" />
      </div>
    </div>

    <div class="post-date text-faded">
      <AppDate :timestamp="post.publishedAt" />
    </div>
  </div>
</template>

<script>
import PostEditor from "./PostEditor";

export default {
  components: {
    PostEditor
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      editing: true
    };
  },

  computed: {
    user() {
      return this.$store.state.users[this.post.userId];
    },
    userPostCount() {
      return Object.keys(this.user.posts).length;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>