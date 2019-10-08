<template>
  <div class="forum-list">
    <router-link
      class="list-title"
      :to="{name:'Category', params:{id:category['.key']}}"
    >{{category.name}}</router-link>
    <ForumList :forums="categoryForums" />
  </div>
</template>

<script>
import ForumList from "./ForumList";

export default {
  components: {
    ForumList
  },
  props: {
    category: {
      required: true
    }
  },
  computed: {
    categoryForums() {
      return Object.values(this.$store.state.forums).filter(
        forum => forum.categoryId === this.category[".key"]
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>