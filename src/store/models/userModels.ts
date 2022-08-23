export type UserProps = {
  id: string
  name: string
  username: string
  email: string
  website: string
  company: string
}
export type APIUserType = {
  id: string
  name: string
  username: string
  email: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
export type UserPostProps = {
  id: string
  title: string
  body: string
}
export type APIUserPostType = {
  id: string
  title: string
  body: string
}
export type UserAlbumProps = {
  id: string
  title: string
  photos: AlbumPhotos[]
}
export type APIUserAlbumType = {
  id: string
  title: string
}
export type AlbumPhotos = {
  id: string
  title: string
  url: string
}
export type APIAlbumPhotosType = {
  id: string
  title: string
  url: string
}