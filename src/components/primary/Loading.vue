<template>
  <div class="loading">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="align-self: flex-start;">
      <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#008080" stroke="none">
        <animateTransform attributeName="transform" type="rotate" dur="1.3157894736842106s" repeatCount="indefinite"
          keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
      </path>
  </svg>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'suspense-loading'
})
</script>
<style lang='scss' scoped>
@import '@/variables';
.loading{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
