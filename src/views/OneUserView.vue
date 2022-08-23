<template>
  <main class="oneUserView">
    <user-card v-if="user">
      <h2 class="heading">{{ user?.name }}</h2>
      <p class="item">{{ user?.username }}</p>
      <p class="item">Email: {{ user?.email }}</p>
      <p class="item">Website: {{ user?.website }}</p>
      <p class="item">Company name: {{ user?.company }}</p>
    </user-card>
    <my-tabs v-if="activeTabName.en" :components="navComponents" :activeTabName="activeTabName"/>
  </main>
</template>
<script lang='ts'>
import Vue from 'vue'
import Posts from '@/components/secondary/Posts.vue';
import Albums from '@/components/secondary/Albums.vue';
import store from '@/store';
import { UserProps } from '@/store/models/userModels';
import { NavigationItemNameType } from '@/store/models/appModels';
import router from '@/router';

export default Vue.extend({
  name: "one-user-view",
  data() {
    return {
      navComponents: [
        { name: { rus: "Посты", en: "posts" }, component: Posts },
        { name: { rus: "Галерея", en: "galery" }, component: Albums }
      ],
      activeTabName: {} as NavigationItemNameType
    };
  },
  computed: {
    user() {
      const users = store.getters.users as UserProps[]
      return users.find(user => +user.id === +router.currentRoute.query.id)
    },
    UsersLoaded() {
      return store.getters.isUsersLoaded
    }
  },
  mounted() {
    if (!this.UsersLoaded) store.dispatch('getUsers')
    if (router.currentRoute.query.page !== this.activeTabName.en) {
      const activeComponent = this.navComponents.find(el => el.name.en === router.currentRoute.query.page)
      this.activeTabName =  activeComponent ? {...activeComponent.name} : { rus: "Посты", en: "posts" }
    }
  },
})
</script>
<style lang='scss'>
@import '@/variables';
</style>
