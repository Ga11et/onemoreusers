import { Module } from 'vuex';
import { fetchAPI } from '../api/fetchAPI';
import { IRootType, IUsersSlice } from '../models/storeModels';
import { UserProps } from '../models/userModels';

export const UsersSlice: Module<IUsersSlice, IRootType> = {
  state: {
    isLoaded: false,
    users: []
  },
  getters: {
    users(state) {
      return state.users
    },
    isUsersLoaded(state) {
      return state.isLoaded
    }
  },
  mutations: {
    setUsers(state, payload: UserProps[]) {
      state.users = payload
    },
    setIsLoaded(state, payload: boolean) {
      state.isLoaded = payload
    }
  },
  actions: {
    async getUsers({ commit }) {
      commit('setIsLoaded', false)
      commit('setUsers', [])
      const users = await fetchAPI.users()
      commit('setUsers', users)
      commit('setIsLoaded', true)
    }
  }
}