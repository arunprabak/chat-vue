<template>
  <div class="col-full">
    <h1 class="heading-large">Not Found</h1>
    <p class="text-large">
      Oops, We could not find what you are looking for Why dont you go to
      <router-link to="/">Home</router-link>?
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  margin-top: 60px;
  text-align: center;
}
.heading-large {
  font-size: 50px;
}
.text-large {
  font-size: 30px;
}
</style>