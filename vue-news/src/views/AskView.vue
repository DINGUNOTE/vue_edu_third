<template>
  <div>
    <p v-for="item in fetchedAsk" v-bind:key="item.title">
      <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { /* mapState, */ mapGetters } from 'vuex';

export default {
  computed: {

    // #1
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk',
    // })

    // #1-2
    ...mapGetters([
      'fetchedAsk'
    ])

    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>