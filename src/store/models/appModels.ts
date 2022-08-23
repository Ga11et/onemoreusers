export type NavigationItemNameType = {
  en: string
  rus: string
}
export type NavigationItemType = {
  name: NavigationItemNameType
  component: Vue.VueConstructor['extend'] | undefined
}