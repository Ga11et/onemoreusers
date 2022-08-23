import { Module } from 'vuex';
import { fetchAPI } from '../api/fetchAPI';
import { IPostsSlice, IRootType } from '../models/storeModels';
import { UserPostProps } from '../models/userModels';

export const PostsSlice: Module<IPostsSlice, IRootType> = {
  state: {
    isLoaded: false,
    posts: []
  },
  getters: {
    posts(state) {
      return state.posts
    },
    isPostsLoaded(state) {
      return state.isLoaded
    }
  },
  mutations: {
    setPosts(state, payload: UserPostProps[]) {
      state.posts = payload
    },
    setIsLoaded(state, payload: boolean) {
      state.isLoaded = payload
    }
  },
  actions: {
    async getPosts({ commit }, userId: string) {
      commit('setIsLoaded', false)
      commit('setPosts', [])
      const posts = await fetchAPI.userPosts(userId)
      commit('setPosts', posts)
      commit('setIsLoaded', true)
    }
  }
}