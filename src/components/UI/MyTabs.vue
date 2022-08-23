<template>
  <div class="tabs">
    <nav class="tabs__navigation">
      <navigation :navigation="components.map(el => el.name)" :activeTab="activeTab.name" @setActiveTab="setActiveHandler" />
    </nav>
    <transition name="fade" mode="out-in" appear>
      <component :is="activeTab.component" />
    </transition>
  </div>
</template>
<script lang='ts'>
import Vue, { PropType } from 'vue';
import { NavigationItemType, NavigationItemNameType } from '@/store/models/appModels'

export default Vue.component('my-tabs', {
  props: {
    components: {
      type: Array as PropType<NavigationItemType[]>,
      required: true
    },
    activeTabName: {
      type: Object as PropType<NavigationItemNameType> ,
      required: true
    }
  },
  data() {
    return {
      activeTab: { name: this.activeTabName, component: this.components.find(el => el.name.en === this.activeTabName.en)?.component }
    }
  },
  methods: {
    setActiveHandler(name: NavigationItemNameType) {
      this.activeTab = { name: name, component: this.components.find(component => component.name === name)?.component }
    }
  },
})
</script>
<style lang='scss' scoped>
@import '@/variables';
.tabs{
  border: 1px solid lightgrey;
  margin: 10px;
}
</style>
