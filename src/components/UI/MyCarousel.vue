<template>
  <div class="carousel">
    <transition-group :name="transitionMode" class="slides">
      <my-image class="slide" v-for="image in content" v-show="image.id === content[index].id" :content="image" :key="image.id" />
    </transition-group>
    <div class="btns">
      <button class="prev" @click="prev">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path fill="white" d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
        </svg>
      </button>
      <button class="next" @click="next">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path fill="white" d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script lang='ts'>
import { AlbumPhotos } from '@/store/models/userModels'
import Vue, { PropType } from 'vue'

export default Vue.component('my-carousel', {
  props: {
    content: {
      type: Array as PropType<AlbumPhotos[]>,
      required: true
    }
  },
  data() {
    return {
      index: 0,
      transitionMode: 'swipeLeft'
    }
  },
  methods: {
    next() {
      this.transitionMode = 'swipeLeft'
      this.index = this.index !== this.content.length - 1 ? this.index + 1 : 0
    },
    prev() {
      this.transitionMode = 'swipeRight'
      this.index = this.index !== 0 ? this.index - 1 : this.content.length - 1
    },
    mounted() {
      console.log(this.content)
    },
  }
})
</script>
<style lang='scss' scoped>
@import '@/variables';
@import '@/transitions';

.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;

  .slides{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    height: 100%;
    clip: rect(0, 600px, 600px, 0);
    .slide{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
  .btns {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    .next,
    .prev {
      color: white;
      font-size: 24px;
      background-color: transparent;
      border: none;
      padding: 0;

      svg{
        width: 40px;
        height: 40px;
      }

      &:hover{
        cursor: pointer;
      }
    }
    .prev > svg{
      transform: rotateY(180deg);
    }
  }
}
@media (max-width: 700px) {
  .carousel{
    width: 100%;
    .slides{
      clip: unset;
      width: 100%;
      .slide{
        width: 100%;
      }
    }
  }
}
</style>
