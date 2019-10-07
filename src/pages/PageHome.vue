<template>
  <div class="col-full">
    <ThreadList :threads="threads" />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import ThreadList from "../components/ThreadList";

console.log(sourceData);

export default {
  name: "Home",
  components: {
    ThreadList
  },
  data() {
    return {
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users
    };
  }
};
</script>

<style scoped>
</style>
