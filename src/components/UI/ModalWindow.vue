<template>
  <div class="modalContainer" @click.self="$root.$emit('closeModal')">
    <div class="modalWindow">
      <slot></slot>
    </div>
  </div>
</template>
<script lang='ts'>
export default {
  name: 'modal-window'
}
</script>
<style lang='scss' scoped>
@import '@/variables';
.modalContainer{
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 128, 128, 0.5);

  .modalWindow{
    min-width: 300px;
    min-height: 300px;
    max-width: 80%;
    max-height: 90%;
    background-color: white;
  }
}
@media (max-width: 700px) {
  .modalContainer{
    .modalWindow{
      max-width: unset;
      width: 100%;
    }
  }
}
</style>
