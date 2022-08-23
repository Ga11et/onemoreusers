<template>
  <div class="userAlbums">
    <Loading v-if="!isLoaded" class="loading" />
    <MyAlbum v-for="album in albums" :key="album.id" :content="album" />
  </div>
</template>
<script lang='ts'>
import router from '@/router';
import store from '@/store';
import { UserAlbumProps } from '@/store/models/userModels';
import Vue from 'vue'
import MyAlbum from '../primary/myAlbum.vue';
import Loading from '../primary/Loading.vue';

export default Vue.extend({
    name: "user-albums",
    components: { MyAlbum, Loading },
    computed: {
      albums() {
        return store.getters.albums as UserAlbumProps[]
      },
      isLoaded() {
        return store.getters.isAlbumsLoaded
      }
    },
    mounted() {
      store.dispatch('getAlbums', router.currentRoute.query.id)
    },
})
</script>
<style lang='scss' scoped>
@import '@/variables';
.userAlbums{
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
  .loading{
    position: absolute;
    top: 0;
    left: 0;
  }
}
@media (max-width: 1000px) {
  .userAlbums{
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 700px) {
  .userAlbums{
    grid-template-columns: 1fr;
  }
}
</style>
