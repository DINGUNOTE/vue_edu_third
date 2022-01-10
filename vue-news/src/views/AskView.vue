<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import { /* mapState, */ mapGetters } from 'vuex';


export default {
  components: {
    ListItem,
  },
  // computed: {

  //   // #1
  //   // ...mapGetters({
  //   //   fetchedAsk: 'fetchedAsk',
  //   // })

  //   // #1-2
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ])

  //   // #2
  //   // ...mapState({
  //   //   fetchedAsk: state => state.ask
  //   // })

  //   // #1
  //   // ask() {
  //   //   return this.$store.state.ask;
  //   // }
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }
}
</script>

<style scoped>
  .news-list{
    margin:0;
    padding:0;
  }
  .post{
    display:flex;
    align-items:center;
    list-style:none;
    border-bottom: 1px solid #eee;
  }
  .points{
    display:flex;
    width:80px;
    height:60px;
    color:#42b883;
    align-items:center;
    justify-content:center;
  }
  .news-title{
    margin:0;
  }
  .link-text{
    color:#828282;
  }
</style>