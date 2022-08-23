<template>
  <div id="app" class="main">
    <transition name="fade">
      <modal-window v-if="isModalOpen">
        <my-carousel :content="components" />
      </modal-window>
    </transition>
    <adaptive-container>
      <transition name="fade" mode="out-in" appear>
        <router-view/>
      </transition>
    </adaptive-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import AdaptiveContainer from './components/UI/adaptiveContainer.vue';

export default Vue.extend({
    name: "app",
    mounted() {
        this.$root.$on("openModal", (components: string[]) => {
            this.components = components;
            this.isModalOpen = true;
        });
        this.$root.$on("closeModal", () => {
            this.components = [];
            this.isModalOpen = false;
        });
    },
    data() {
        return {
            components: [] as string[],
            isModalOpen: false
        };
    },
    components: { AdaptiveContainer }
})
</script>
<style lang="scss">
@import '@/transitions';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;1,400&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
}
:root{
  font-family: 'Montserrat', sans-serif;
}
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
