import { UserAlbumProps, UserPostProps, UserProps } from './userModels'

export type IRootType = {

}
export type IUsersSlice = {
  users: UserProps[]
  isLoaded: boolean
}
export type IPostsSlice = {
  posts: UserPostProps[]
  isLoaded: boolean
}
export type IGalerySlice = {
  albums: UserAlbumProps[]
  isLoaded: boolean
}