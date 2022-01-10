<template>
  <div>
    <ul class="news-list">
      <li v-for="item in $store.state.jobs" :key="item.title" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <a :href="item.url">{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
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