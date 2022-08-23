<template>
  <div class="userPosts">
    <Loading v-if="!isLoaded" class="loading" />
    <MyPost v-for="post in posts" :content="post" :key="post.id" />
  </div>
</template>
<script lang='ts'>
import router from '@/router';
import store from '@/store';
import Vue from 'vue'
import MyPost from '../primary/MyPost.vue';
import Loading from '../primary/Loading.vue';

export default Vue.extend({
  name: 'user-posts',
  computed: {
    posts() {
      return store.getters.posts
    },
    isLoaded() {
      return store.getters.isPostsLoaded
    }
  },
  mounted() {
      store.dispatch("getPosts", router.currentRoute.query.id);
  },
  components: { MyPost, Loading }
})
</script>
<style lang='scss'>
@import '@/variables';
</style>
