<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
  components: {
    ListItem,
  },
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