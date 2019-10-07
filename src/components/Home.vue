<template>
  <div>
    <div v-for="thread in threads" class="col-large push-top">
      <h1>{{thread.title}}</h1>
      <div class="post-list">
        <div class="post" v-for="postId in thread.posts" :key="postId">
          <div class="user-info">
            <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>

            <a href="#">
              <img
                class="avatar-large"
                :src="users[posts[postId].userId].avatar"
                :alt="users[posts[postId].userId].name"
              />
            </a>

            <p class="desktop-only text-small">107 posts</p>
          </div>

          <div class="post-content">
            <div>
              <p>{{posts[postId].text}}</p>
            </div>
          </div>

          <div class="post-date text-faded">{{posts[postId].publishedAt}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

console.log(sourceData);

export default {
  name: "Home",
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    };
  }
};
</script>

<style scoped>
</style>
