<template>
  <div id="app">
    <ToolBar></ToolBar>
    
    <!-- router에 설정된 url과 맞는 컴포넌트가 표시 됨 -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
