<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{name:'ThreadShow', params:{id:thread['.key']}}">{{thread.title}}</router-link>
      </p>
      <p class="text-faded text-xsmall">
        By
        <a href="#">{{user}}</a>
        ,
        <AppDate :timestamp="thread.publishedAt" />
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">{{repliesCount}} {{repliesCount>1?'replies':'reply'}}</p>

      <!-- <img
        class="avatar-medium"
        src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png"
        alt
      />-->

      <!-- <div>
        <p class="text-xsmall">
          <a href="profile.html">Bruce Wayne</a>
        </p>
        <p class="text-xsmall text-faded">2 hours ago</p>
      </div>-->
    </div>
  </div>
</template>

<script>
import { countObjectProperties } from "@/utils";
export default {
  props: {
    thread: {
      required: true,
      type: Object
    }
  },
  computed: {
    repliesCount() {
      const posts = countObjectProperties(
        Object.keys(this.thread.posts).length
      );
      return posts > !1 ? posts - 1 : 0;
    },
    user() {
      return this.$store.state.users[this.thread.userId].name;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>