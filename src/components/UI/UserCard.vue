<template>
  <section class="userCard">
    <slot></slot>
  </section>
</template>
<script lang='ts'>
export default {
  name: 'user-card'
}
</script>
<style lang='scss'>
@import '@/variables';
.userCard{
  border: 1px solid teal;
  padding: 15px;
  margin: 10px;
  .heading{
  padding-bottom: 10px;
  }
  .item{
    padding-bottom: 5px;
    font-size: 16px;
  }
}
</style>
