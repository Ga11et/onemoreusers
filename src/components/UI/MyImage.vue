<template>
  <div class="imageContainer">
    <img class="image" :src="content.url" :alt="content.title" />
    <h3 class="heading">{{ content.title }}</h3>
  </div>
</template>
<script lang='ts'>
import { AlbumPhotos } from '@/store/models/userModels';
import Vue, { PropType } from 'vue'

export default Vue.component('my-image', {
  props: {
    content: {
      type: Object as PropType<AlbumPhotos>
    }
  }
})
</script>
<style lang='scss' scoped>
@import '@/variables';
.imageContainer{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .image{
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .heading{
    position: absolute;
    bottom: 20px;
    text-align: center;
    width: 80%;
    padding: 10px 15px;
    color: white;
    background-color: teal;
  }
}
@media (max-width: 700px) {
  .imageContainer{
    .image{
      width: 100%;
    }
  }
}
</style>
