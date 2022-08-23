import { Module } from 'vuex';
import { fetchAPI } from '../api/fetchAPI';
import { IGalerySlice, IRootType } from '../models/storeModels';
import { AlbumPhotos, UserAlbumProps } from '../models/userModels';

export const GalerySlice: Module<IGalerySlice, IRootType> = {
  state: {
    isLoaded: false,
    albums: []
  },
  getters: {
    albums(state) {
      return state.albums
    },
    isAlbumsLoaded(state) {
      return state.isLoaded
    }
  },
  mutations: {
    setAlbums(state, payload: UserAlbumProps[]) {
      state.albums = payload
    },
    setIsLoaded(state, payload: boolean) {
      state.isLoaded = payload
    },
    setAlbumPhotos(state, payload: { albumId: string, photos: AlbumPhotos[] }) {
      const album = state.albums.find(album => album.id === payload.albumId)
      if (album) album.photos = payload.photos
    }
  },
  actions: {
    async getAlbums({ commit }, userId: string) {
      commit('setIsLoaded', false)
      commit('setAlbums', [])
      const albums = await fetchAPI.userGalery(userId)
      commit('setAlbums', albums)
      commit('setIsLoaded', true)
    },
    async getPhotos({ commit }, albumId: string) {
      const photos = await fetchAPI.userAlbumPhotos(albumId)
      commit('setAlbumPhotos', { albumId, photos })
    }
  }
}