<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <!-- router에 설정된 url과 맞는 컴포넌트가 표시 됨 -->
      <router-view></router-view>
    </transition>
    
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

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* // Router Transition */

</style>
