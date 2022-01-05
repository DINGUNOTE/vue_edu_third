<template>
  <div>
    <p v-for="item in $store.state.jobs" :key="item.title">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{item.time_ago}}, {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>