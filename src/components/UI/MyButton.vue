<template>
  <button @click="$emit('click', $event)" class="myButton">
    <slot></slot>
  </button>
</template>
<script lang='ts'>
export default {
  name: 'my-button'
}
</script>
<style lang='scss' scoped>
@import '@/variables';
.myButton{
  padding: 15px 25px;
  color: teal;
  border: 1px solid teal;
  background-color: transparent;
  font-size: 16px;
  transition: 300ms;
  font-family: inherit;

  &:hover{
    cursor: pointer;
    background-color: rgba(0, 128, 128, 0.2);
    transition: 600ms;
  }
}
</style>
