<template>
  <div class="adaptiveContainer">
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'

export default {
  name: 'adaptive-container'
}
</script>
<style lang='scss' scoped>
@import '@/variables';
.adaptiveContainer{
  width: 1280px;
}
@media (max-width: 1280px) {
  .adaptiveContainer{
    width: 100%;
  }
}
</style>
