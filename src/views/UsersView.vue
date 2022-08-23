<template>
  <main class="usersView">
    <Loading v-if="!isLoaded" class="loading" />
    <MyUser v-for="user in  users" :content="user" :key="user.id" />
  </main>
</template>

<script lang="ts">
import store from '@/store';
import Vue from 'vue';
import MyUser from '@/components/primary/MyUser.vue';
import Loading from '@/components/primary/Loading.vue';

export default Vue.extend({
  name: 'HomeView',
  components: { MyUser, Loading },
  computed: {
    users() {
      return store.getters.users
    },
    isLoaded() {
      return store.getters.isUsersLoaded
    }
  },
  mounted() {
    store.dispatch('getUsers')
  }
});
</script>
<style lang="scss">
@import "@/variables";
</style>
