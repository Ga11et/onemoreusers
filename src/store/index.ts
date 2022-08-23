import { GalerySlice } from './helpers/galery';
import { PostsSlice } from './helpers/posts';
import { UsersSlice } from './helpers/users';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    UsersSlice,
    PostsSlice,
    GalerySlice
  }
})
