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
body{margin:0;padding:0;}
</style>
