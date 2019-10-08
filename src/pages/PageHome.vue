<template>
  <div class="col-full">
    <h1>Welcome to Forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import CategoryList from "../components/CategoryList";

console.log(sourceData);

export default {
  name: "Home",
  components: {
    CategoryList
  },
  data() {
    return {
      categories: Object.values(sourceData.categories)
    };
  }
};
</script>

<style scoped>
</style>
