<template>
  <span
    class="post-date text-faded"
    :title="timestamp | humanFriendlyDate"
  >{{timestamp | differHumans}}</span>
</template>

<script>
import moment from "moment";

export default {
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  filters: {
    humanFriendlyDate(date) {
      return moment.unix(date).format("MMMM Do YYYY, h:mm:ss a");
    },
    differHumans(date) {
      return moment.unix(date).fromNow();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>