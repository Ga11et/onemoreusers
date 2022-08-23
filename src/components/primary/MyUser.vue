<template>
  <user-card>
    <h2 class="heading">{{ content.name }}</h2>
    <p class="item">{{ content.username }}</p>
    <p class="item">Email: {{ content.email }}</p>
    <p class="item">Website: {{ content.website }}</p>
    <p class="item">Company name: {{ content.company }}</p>
    <my-button class="btn" @click="openUserHandler">Открыть пользователя</my-button>
  </user-card>
</template>
<script lang='ts'>
import router from '@/router';
import { UserProps } from '@/store/models/userModels';
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'user-component',
  props: {
    'content': {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  methods: {
    openUserHandler: function () {
      router.push({ path: 'user', query: { id: this.content.id, page: 'posts' } })
    }
  }
})
</script>
<style lang='scss' scoped>
@import '@/variables';
.btn{
  margin: 10px 0 0;
}
</style>
