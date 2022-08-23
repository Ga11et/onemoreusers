<template>
  <div class="album" @click="albumClickHandler">
    <h3 class="heading">{{ content.title }}</h3>
    <span class="photo span"></span>
    <img v-if="photos[0]" class="photo" :src="photos[0].url" :key="photos[0].id" />
  </div>
</template>
<script lang='ts'>
import store from '@/store';
import { UserAlbumProps } from '@/store/models/userModels';
import Vue, { PropType } from 'vue'

export default Vue.extend({
    name: "my-album",
    props: {
        content: {
            type: Object as PropType<UserAlbumProps>,
            required: true
        }
    },
    computed: {
        photos() {
            const album = store.getters.albums.find((album: UserAlbumProps) => album.id === this.content.id) as UserAlbumProps;
            return album.photos;
        }
    },
    mounted() {
        store.dispatch("getPhotos", this.content.id);
    },
    methods: {
      albumClickHandler() {
        this.$root.$emit('openModal', this.photos)
      }
    }
})
</script>
<style lang='scss' scoped>
@import '@/variables';
.album{
  position: relative;
  min-height: 300px;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;

  &:hover{
    cursor: pointer;

    .span{
      transition: 600ms;
    }
    .heading{
      transition: 600ms;
      transform: scale(1.1);
    }
  }
  .heading{
    transition: 600ms;
    padding: 15px;
    position: absolute;
    text-align: center;
    z-index: 4;
    color: white;
  }
  .photo{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    z-index: 2;
  }
  .span{
    transition: 600ms;
    background-color: rgba(0, 128, 128, 0.7);
    z-index: 3;
    position: absolute;
  }
}
</style>
