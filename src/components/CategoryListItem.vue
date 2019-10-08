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
import sourceData from "@/data.json";
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
      return Object.values(sourceData.forums).filter(
        forum => forum.categoryId === this.category[".key"]
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>