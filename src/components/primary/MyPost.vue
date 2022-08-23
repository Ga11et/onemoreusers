<template>
  <user-card>
    <h2 class="heading">{{ content.title }}</h2>
    <p>{{ content.body }}</p>
  </user-card>
</template>
<script lang='ts'>
import { UserPostProps } from '@/store/models/userModels';
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'user-component',
  props: {
    'content': {
      type: Object as PropType<UserPostProps>,
      required: true
    }
  }
})
</script>
<style lang='scss' scoped>
@import '@/variables';
.heading{
  padding-bottom: 10px;
}
</style>
