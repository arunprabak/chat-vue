<template>
  <div class="col-full">
    <h1>Welcome to Forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
import CategoryList from "../components/CategoryList";

export default {
  name: "Home",
  components: {
    CategoryList
  },
  computed: {
    categories() {
      return Object.values(this.$store.state.categories);
    }
  }
};
</script>

<style scoped>
</style>
