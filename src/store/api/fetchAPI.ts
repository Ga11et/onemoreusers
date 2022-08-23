import { AlbumPhotos, APIAlbumPhotosType, APIUserAlbumType } from './../models/userModels';
import { APIUserPostType, APIUserType, UserAlbumProps, UserPostProps, UserProps } from '../models/userModels'

export const fetchAPI = {
  async users(): Promise<UserProps[]> {
    const users: APIUserType[] = await fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json())
    const returnValue: UserProps[] = users.map(user => ({
      name: user.name,
      username: user.username,
      email: user.email,
      id: user.id,
      company: user.company.name,
      website: user.website
    })) 
    return returnValue
  },
  async userPosts(userId: string): Promise<UserPostProps[]> {
    const posts: APIUserPostType[] = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(resp => resp.json())
    const returnValue: UserPostProps[] = posts.map( post => ({
      id: post.id,
      body: post.body,
      title: post.title
    }))
    return returnValue
  },
  async userGalery(userId: string): Promise<UserAlbumProps[]> {
    const albums: APIUserAlbumType[] = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`).then(resp => resp.json())
    const returnValue: UserAlbumProps[] = albums.map(album => ({
      id: album.id,
      title: album.title,
      photos: []
    }))
    return returnValue
  },
  async userAlbumPhotos(albumId: string): Promise<AlbumPhotos[]> {
    const photos: APIAlbumPhotosType[] = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).then(resp => resp.json())
    const returnValue: AlbumPhotos[] = photos.map(photo => ({
      id: photo.id,
      title: photo.title,
      url: photo.url
    }))
    return returnValue.slice(0, 5)
  }
}