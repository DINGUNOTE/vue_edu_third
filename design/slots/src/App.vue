<template>
  <div>
    <ul>
      <item>아이템 1</item>
      <item>아이템 2 <button type="button">Click me</button></item>
      <item><div>아이템 3</div> <img src="./assets/logo.png" alt="Vue" width="30px" height="30px"></item>
      <item><div style="color: blue; font-size: 20px;">아이템 4</div></item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  }
}
</script>
