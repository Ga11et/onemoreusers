<template>
  <ul class="navigation">
    <li :class="['item', {active: item.en === activeTab.en}]" @click="changeTabHundler(item)" v-for="item in navigation">{{ item.rus }}</li>
  </ul>
</template>
<script lang='ts'>
import router from '@/router';
import { NavigationItemNameType } from '@/store/models/appModels';
import Vue, { PropType } from 'vue';

export default Vue.component('navigation', {
  props: {
    navigation: {
      type: Array as PropType<NavigationItemNameType[]>,
      required: true
    },
    activeTab: {
      type: Object as PropType<NavigationItemNameType>,
      required: true
    }
  },
  methods: {
    changeTabHundler(item: NavigationItemNameType) {
      this.$emit('setActiveTab', item)
      router.replace({ query: { id: router.currentRoute.query.id, page: item.en } })
    }
  },
})
</script>
<style lang='scss' scoped>
@import '@/variables';
.navigation{
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  background-color: #d3d3d3;
  height: 50px;
  .item{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    color: grey;
    font-size: 16px;
    transition: 300ms;
    border: 1px solid transparent;
    border-bottom: none;

    &:hover:not(.active){
      transition: 600ms;
      cursor: pointer;
      background-color: #80808033;
    }
  }
  .active{
    transition: 300ms;
    color: teal;
    background-color: white;
    border: 1px solid teal;
    border-bottom: none;
  }
}
@media (max-width: 700px) {
  .navigation{
    height: 80px;
    .item{
      padding: 0 22px;
      font-size: 20px;
    }
  }
}
</style>
