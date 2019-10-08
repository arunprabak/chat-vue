<template>
  <div class="forum-listing">
    <div class="forum-details">
      <router-link
        class="text-xlarge"
        :to="{name:'Forum', params:{id:forum['.key']}}"
      >{{forum.name}}</router-link>
      <p>{{forum.description}}</p>
    </div>

    <div class="threads-count">
      <p>
        <span class="count">{{threadCount}}</span>
        {{threadCount>1 ?'threads': 'thread'}}
      </p>
    </div>

    <div class="last-thread">
      <!-- Todo: implement Later -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forum: {
      required: true,
      type: Object
    }
  },
  computed: {
    threadCount() {
      return this.forum.threads ? Object.values(this.forum.threads).length : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>